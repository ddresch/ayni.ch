import ContactRequest from '../../../components/mails/ContactRequest.js'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ 
            message: 'Only POST requests allowed' 
        })
        return
    }

    const { name, mail, phone, request, message } = req.body

    // Build SendGrid-compatible mail object using existing template
    const mailData = ContactRequest({ name, mail, phone, request, message })
    
    // Add reply_to for the PHP script
    mailData.reply_to = mail

    try {
        const phpMailEndpoint = process.env.PHP_MAIL_ENDPOINT
        
        if (!phpMailEndpoint) {
            throw new Error('PHP_MAIL_ENDPOINT environment variable not set')
        }

        const response = await fetch(phpMailEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Optional: Add API key if configured in PHP script
                ...(process.env.PHP_MAIL_API_KEY && {
                    'Authorization': `Bearer ${process.env.PHP_MAIL_API_KEY}`
                })
            },
            body: JSON.stringify(mailData),
        })

        const result = await response.json()

        if (!response.ok) {
            throw new Error(result.result || 'Failed to send email')
        }

        res.status(200).json({ result: 'Emails sent' })
    } catch (error) {
        console.error('Mail error:', error)
        res.status(500).json({ result: error.message || 'Failed to send email' })
    }
}