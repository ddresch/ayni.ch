<?php
/**
 * Simple PHP Mail Script - SendGrid API Compatible
 * 
 * This script is called server-side from the Next.js API route.
 * It accepts POST requests with JSON data and sends emails
 * using PHP's built-in mail() function.
 * 
 * Expected JSON format (SendGrid compatible):
 * {
 *   "to": "recipient@example.com",
 *   "from": "sender@example.com",
 *   "subject": "Email Subject",
 *   "text": "Plain text content",
 *   "html": "<p>HTML content</p>"
 * }
 */

// Configuration
$config = [
    'recipient_mail' => 'gruezi@ayni.ch', // Change this to your email
    'sender_mail' => 'noreply@ayni.ch',           // Change this to your sender email
    'api_key' => 'qzalksvlwuetkxcvnalksnghgzdftghuzqlckcvnarthahdghh',           // Optional: shared secret for authentication
];

header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Only POST requests allowed']);
    exit();
}

// Optional: Verify API key from Authorization header
$authHeader = isset($_SERVER['HTTP_AUTHORIZATION']) ? $_SERVER['HTTP_AUTHORIZATION'] : '';
if (!empty($config['api_key']) && $config['api_key'] !== 'your-secret-api-key') {
    if ($authHeader !== 'Bearer ' . $config['api_key']) {
        http_response_code(401);
        echo json_encode(['result' => 'Unauthorized']);
        exit();
    }
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['result' => 'Invalid JSON data']);
    exit();
}

// Validate required fields (SendGrid-style format)
if (!isset($data['to']) || !isset($data['from']) || !isset($data['subject'])) {
    http_response_code(400);
    echo json_encode(['result' => 'Missing required fields: to, from, subject']);
    exit();
}

$to = filter_var($data['to'], FILTER_SANITIZE_EMAIL);
$from = filter_var($data['from'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($data['subject'], ENT_QUOTES, 'UTF-8');
$textContent = isset($data['text']) ? $data['text'] : '';
$htmlContent = isset($data['html']) ? $data['html'] : '';
$replyTo = isset($data['reply_to']) ? filter_var($data['reply_to'], FILTER_SANITIZE_EMAIL) : $from;

// Validate email addresses
if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['result' => 'Invalid recipient email']);
    exit();
}

// Build email headers
$boundary = md5(time());
$headers = [
    'From: ' . $from,
    'Reply-To: ' . $replyTo,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
    'X-Mailer: PHP/' . phpversion()
];

// Build multipart email body
$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $textContent . "\r\n\r\n";

if (!empty($htmlContent)) {
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $htmlContent . "\r\n\r\n";
}

$body .= "--$boundary--";

// Send email
$success = mail($to, $subject, $body, implode("\r\n", $headers));

if ($success) {
    http_response_code(200);
    echo json_encode(['result' => 'Emails sent']);
} else {
    http_response_code(500);
    echo json_encode(['result' => 'Failed to send email']);
}
