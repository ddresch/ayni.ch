#!/usr/bin/env node

/**
 * Sitemap URL Checker
 * 
 * This script parses the sitemap.xml and checks if all URLs
 * return valid HTTP response codes.
 * 
 * Usage: node scripts/check-sitemap.mjs [sitemap-path]
 * 
 * Default sitemap path: ./public/sitemap.xml
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
}

/**
 * Extract URLs from sitemap XML content
 */
function extractUrls(xmlContent) {
    const urlRegex = /<loc>(.*?)<\/loc>/g
    const urls = []
    let match

    while ((match = urlRegex.exec(xmlContent)) !== null) {
        urls.push(match[1])
    }

    return urls
}

/**
 * Check a single URL and return its status
 */
async function checkUrl(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD', // Use HEAD to avoid downloading full content
            redirect: 'follow',
        })
        
        return {
            url,
            status: response.status,
            ok: response.ok,
            redirected: response.redirected,
            finalUrl: response.url,
        }
    } catch (error) {
        return {
            url,
            status: 0,
            ok: false,
            error: error.message,
        }
    }
}

/**
 * Get status color based on HTTP status code
 */
function getStatusColor(status) {
    if (status >= 200 && status < 300) return colors.green
    if (status >= 300 && status < 400) return colors.yellow
    if (status >= 400) return colors.red
    return colors.red
}

/**
 * Format the result for console output
 */
function formatResult(result) {
    const statusColor = getStatusColor(result.status)
    const statusText = result.status || 'ERR'
    const icon = result.ok ? '✓' : '✗'
    const iconColor = result.ok ? colors.green : colors.red
    
    let output = `${iconColor}${icon}${colors.reset} ${statusColor}[${statusText}]${colors.reset} ${result.url}`
    
    if (result.redirected) {
        output += `${colors.dim} → ${result.finalUrl}${colors.reset}`
    }
    
    if (result.error) {
        output += `${colors.red} (${result.error})${colors.reset}`
    }
    
    return output
}

/**
 * Main function
 */
async function main() {
    const args = process.argv.slice(2)
    const sitemapPath = args[0] || './public/sitemap.xml'
    const resolvedPath = resolve(process.cwd(), sitemapPath)
    
    console.log(`${colors.cyan}Sitemap URL Checker${colors.reset}`)
    console.log(`${colors.dim}Reading sitemap from: ${resolvedPath}${colors.reset}\n`)
    
    // Read and parse sitemap
    let xmlContent
    try {
        xmlContent = readFileSync(resolvedPath, 'utf-8')
    } catch (error) {
        console.error(`${colors.red}Error reading sitemap: ${error.message}${colors.reset}`)
        process.exit(1)
    }
    
    const urls = extractUrls(xmlContent)
    
    if (urls.length === 0) {
        console.error(`${colors.red}No URLs found in sitemap${colors.reset}`)
        process.exit(1)
    }
    
    console.log(`${colors.cyan}Found ${urls.length} URLs to check${colors.reset}\n`)
    
    // Check all URLs
    const results = []
    let successCount = 0
    let errorCount = 0
    
    for (const url of urls) {
        const result = await checkUrl(url)
        results.push(result)
        
        console.log(formatResult(result))
        
        if (result.ok) {
            successCount++
        } else {
            errorCount++
        }
    }
    
    // Print summary
    console.log(`\n${colors.cyan}─────────────────────────────────────${colors.reset}`)
    console.log(`${colors.cyan}Summary${colors.reset}`)
    console.log(`${colors.cyan}─────────────────────────────────────${colors.reset}`)
    console.log(`Total URLs:  ${urls.length}`)
    console.log(`${colors.green}Success:     ${successCount}${colors.reset}`)
    console.log(`${colors.red}Errors:      ${errorCount}${colors.reset}`)
    
    // List failed URLs if any
    if (errorCount > 0) {
        console.log(`\n${colors.red}Failed URLs:${colors.reset}`)
        results
            .filter(r => !r.ok)
            .forEach(r => {
                console.log(`  - ${r.url} ${colors.dim}(${r.status || r.error})${colors.reset}`)
            })
    }
    
    // Exit with error code if there are failures
    process.exit(errorCount > 0 ? 1 : 0)
}

main()
