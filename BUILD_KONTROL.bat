@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 goto :node_error
call corepack enable
if errorlevel 1 goto :error
call corepack prepare pnpm@10.13.1 --activate
if errorlevel 1 goto :error
echo Temiz kurulum ve uretim kontrolu baslatiliyor...
call pnpm install --frozen-lockfile
if errorlevel 1 goto :error
call pnpm validate:content
if errorlevel 1 goto :error
call pnpm typecheck
if errorlevel 1 goto :error
call pnpm build
if errorlevel 1 goto :error
echo.
echo [OK] Troublio uretim derlemesi basarili.
pause
exit /b 0
:node_error
echo [HATA] Node.js 22 kurulu olmali.
echo https://nodejs.org/
pause
exit /b 1
:error
echo.
echo [HATA] Kontrol basarisiz. Yukaridaki hatayi inceleyin.
pause
exit /b 1
