# ================================================================
#  push-to-github.ps1
#  סקריפט חד-פעמי להעלאת הפרויקט ל-GitHub
#  הרצה: לחיצה ימנית על הקובץ → Run with PowerShell
#         (או מתוך טרמינל PowerShell:  .\push-to-github.ps1)
# ================================================================

$ErrorActionPreference = "Stop"
$REPO_NAME    = "halla-drausha-website"
$VISIBILITY   = "--public"   # אם תרצה ריפו פרטי, החלף ל "--private"
$COMMIT_MSG   = "Initial commit — Halla Drausha engineering website"

Write-Host "==> מתחיל בהעלאת הפרויקט ל-GitHub" -ForegroundColor Cyan

# 1. לוודא שאנחנו בתיקיית הפרויקט
Set-Location -Path $PSScriptRoot
Write-Host "תיקיית עבודה: $PWD"

# 2. לוודא ש-git מותקן
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "git לא מותקן. התקן אותו מ-https://git-scm.com/download/win ואז הרץ שוב." -ForegroundColor Red
    exit 1
}

# 3. לוודא ש-gh מותקן — אם לא, להתקין דרך winget
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI לא נמצא — מתקין דרך winget..." -ForegroundColor Yellow
    winget install --id GitHub.cli -e --silent --accept-source-agreements --accept-package-agreements
    # רענון ה-PATH לסשן הנוכחי
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
        Write-Host "ההתקנה הסתיימה — אנא סגור את חלון ה-PowerShell, פתח אחד חדש, והרץ שוב את הסקריפט." -ForegroundColor Red
        exit 1
    }
}

# 4. אימות מול GitHub (אם עדיין לא מאומת)
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "==> פותח דפדפן לאימות מול GitHub. אשר את הקוד שיופיע."  -ForegroundColor Cyan
    gh auth login --git-protocol https --hostname github.com --web --scopes "repo,read:org"
}

# 5. אתחול ריפו מקומי (אם לא קיים)
if (-not (Test-Path ".git")) {
    git init -b main
    git config user.email "tamirdery100@gmail.com"
    git config user.name  "Tamir"
}

# 6. הוספת קבצים ו-commit
git add -A
# אם אין מה לקמיט, לא להפיל את הסקריפט
$staged = git diff --cached --name-only
if ($staged) {
    git commit -m "$COMMIT_MSG"
} else {
    Write-Host "אין שינויים חדשים לקמיט." -ForegroundColor Yellow
}

# 7. יצירת ריפו ב-GitHub ופוש (אם עדיין לא נוצר)
$existing = gh repo view $REPO_NAME 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "==> יוצר ריפו $REPO_NAME ב-GitHub..." -ForegroundColor Cyan
    gh repo create $REPO_NAME $VISIBILITY --source=. --remote=origin --push
} else {
    Write-Host "==> הריפו כבר קיים — מבצע git push" -ForegroundColor Cyan
    if (-not (git remote | Select-String "^origin$")) {
        $user = gh api user --jq .login
        git remote add origin "https://github.com/$user/$REPO_NAME.git"
    }
    git push -u origin main
}

# 8. סיום — להציג קישור
$user = gh api user --jq .login
$url  = "https://github.com/$user/$REPO_NAME"
Write-Host ""
Write-Host "✓  הפרויקט הועלה בהצלחה!" -ForegroundColor Green
Write-Host "    $url" -ForegroundColor Green
Start-Process $url
