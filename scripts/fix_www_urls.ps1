# Fix non-www URLs to www URLs across all layout and page files
# This ensures canonical URL consistency

$files = @(
    "src\app\trust\layout.tsx",
    "src\app\website-widget\layout.tsx",
    "src\app\terms-conditions\layout.tsx",
    "src\app\service-drive\page.tsx",
    "src\app\resources\layout.tsx",
    "src\app\team\layout.tsx",
    "src\app\speed-to-lead\layout.tsx",
    "src\app\team\page.tsx",
    "src\app\speed-to-lead\page.tsx",
    "src\app\dealers\pre-owned\layout.tsx",
    "src\app\dealers\franchise\layout.tsx",
    "src\app\privacy-policy\layout.tsx",
    "src\app\reputation-management\page.tsx",
    "src\app\dealers\layout.tsx",
    "src\app\lead-reactivation\layout.tsx",
    "src\app\lead-reactivation\page.tsx",
    "src\app\dealers\independent\layout.tsx",
    "src\app\integrations\page.tsx",
    "src\app\integrations\[slug]\page.tsx",
    "src\app\case-studies\[slug]\layout.tsx",
    "src\app\dealers\auto-groups\layout.tsx",
    "src\app\case-studies\layout.tsx",
    "src\app\dealer-success\page.tsx",
    "src\app\faqs\layout.tsx",
    "src\app\careers\layout.tsx",
    "src\app\cookie-policy\layout.tsx",
    "src\app\custom-campaigns\layout.tsx",
    "src\app\contact\page.tsx",
    "src\app\contact\layout.tsx",
    "src\app\company\layout.tsx",
    "src\app\book-demo\page.tsx",
    "src\app\blog\page.tsx",
    "src\app\blog\[slug]\page.tsx",
    "src\app\blog\category\[slug]\page.tsx",
    "src\app\blog\tag\[slug]\page.tsx",
    "src\app\auto-master-suite\layout.tsx",
    "src\app\about-visquanta\layout.tsx",
    "src\app\ams-guides\layout.tsx"
)

$count = 0
foreach ($file in $files) {
    $fullPath = Join-Path $PSScriptRoot "..\$file"
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        $newContent = $content -replace 'https://visquanta\.com', 'https://www.visquanta.com'
        
        if ($content -ne $newContent) {
            Set-Content $fullPath $newContent -NoNewline
            Write-Host "Updated: $file" -ForegroundColor Green
            $count++
        }
    } else {
        Write-Host "Not found: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nTotal files updated: $count" -ForegroundColor Cyan
