# ================================================================
#  push-diagnose.ps1 — מאבחן ומשלים את ההעלאה ל-GitHub
#  כותב לוג מפורט ל-push-log.txt בתיקייה
# ================================================================

$ErrorActionPreference = "Continue"   # שלא יעצור באמצע
$REPO_NAME  = "halla-drausha-website"
$VISIBILITY = "--public"
$COMMIT_MSG = "Initial commit — Halla Drausha engineering website"
$LOG        = Join-Path $PSScriptRoot "push-log.txt"

# פונקציה לרישום ללוג
function Log($msg) {
    $stamp = Get-Date -Format "HH:mm:ss"
    "[$stamp] $msg" | Tee-Object -FilePath $LOG -Append
}

"" | Out-File -FilePath $LOG -Encoding utf8   # איפוס הלוג
Log "=== התחלת אבחון ==="
Set-Location -Path $PSScriptRoot
Log "תיקיית עבודה: $PWD"

# ---------- 1. בדיקות קדם ----------
$git = Get-Command git -ErrorAction SilentlyContinue
$gh  = Get-Command gh  -ErrorAction SilentlyContinue
Log ("git    : " + ($(if ($git) { $git.Source } else { 'NOT FOUND' })))
Log ("gh     : " + ($(if ($gh)  { $gh.Source }  else { 'NOT FOUND' })))

if (-not $git) { Log "✗ git לא מותקן — התקן מ https://git-scm.com/download/win"; exit 1 }
if (-not $gh)  { Log "✗ gh לא מותקן — התקן מ https://cli.github.com";       exit 1 }

# ---------- 2. סטטוס אימות gh ----------
Log "--- gh auth status ---"
$authStatus = gh auth status 2>&1
$authStatus | ForEach-Object { Log "  $_" }
if ($LASTEXITCODE -ne 0) {
    Log "צריך להתחבר מחדש — מפעיל gh auth login"
    gh auth login --git-protocol https --hostname github.com --web --scopes "repo,read:org" 2>&1 | ForEach-Object { Log "  $_" }
}

# שם משתמש
$ghUser = (gh api user --jq .login 2>$null)
Log "שם משתמש GitHub: $ghUser"

# ---------- 3. מצב ה-git המקומי ----------
if (Test-Path ".git") {
    Log "✓ .git קיים — repo מקומי כבר אותחל"
} else {
    Log "→ מאתחל repo מקומי"
    git init -b main 2>&1 | ForEach-Object { Log "  $_" }
    git config user.email "tamirdery100@gmail.com"
    git config user.name  "Tamir"
}

# ---------- 4. commit ----------
git add -A 2>&1 | ForEach-Object { Log "  add: $_" }
$staged = git diff --cached --name-only
if ($staged) {
    Log "→ מבצע commit ($((($staged -split "`n").Count)) קבצים)"
    git commit -m "$COMMIT_MSG" 2>&1 | ForEach-Object { Log "  commit: $_" }
} else {
    Log "אין שינויים חדשים לקמיט"
}

# ---------- 5. ריפו ב-GitHub ----------
Log "--- בדיקת קיום ריפו $ghUser/$REPO_NAME ---"
gh repo view "$ghUser/$REPO_NAME" --json name,url 2>&1 | ForEach-Object { Log "  $_" }
$repoExists = ($LASTEXITCODE -eq 0)

if (-not $repoExists) {
    Log "→ יוצר ריפו חדש ב-GitHub"
    gh repo create $REPO_NAME $VISIBILITY --source=. --remote=origin --push 2>&1 | ForEach-Object { Log "  create: $_" }
} else {
    Log "✓ הריפו כבר קיים — בודק remote"
    $remotes = git remote
    if (-not ($remotes -match "^origin$")) {
        Log "→ מוסיף remote origin"
        git remote add origin "https://github.com/$ghUser/$REPO_NAME.git" 2>&1 | ForEach-Object { Log "  remote: $_" }
    }
    Log "→ git push -u origin main"
    git push -u origin main 2>&1 | ForEach-Object { Log "  push: $_" }
}

# ---------- 6. אימות סופי ----------
Log "--- מצב סופי ---"
Log ("commits מקומיים: " + (git log --oneline 2>&1 | Measure-Object -Line).Lines)
Log ("remotes:`n" + ((git remote -v 2>&1) -join "`n"))
Log ("URL: https://github.com/$ghUser/$REPO_NAME")
Log "=== סיום ==="

Write-Host ""
Write-Host "הלוג המלא נשמר ב: $LOG" -ForegroundColor Cyan
Write-Host "כתובת הריפו (אם נוצר): https://github.com/$ghUser/$REPO_NAME" -ForegroundColor Green
