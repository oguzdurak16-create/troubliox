@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo [HATA] Node.js 22 kurulu olmali.
  echo https://nodejs.org/
  pause
  exit /b 1
)
call corepack enable
if errorlevel 1 goto :error
call corepack prepare pnpm@10.13.1 --activate
if errorlevel 1 goto :error
if not exist node_modules (
  echo Bagimliliklar kuruluyor...
  call pnpm install --frozen-lockfile
  if errorlevel 1 goto :error
)
echo Troublio baslatiliyor...
call pnpm dev
exit /b 0
:error
echo [HATA] Kurulum veya calistirma basarisiz.
pause
exit /b 1
