@echo off
setlocal
cd /d "%~dp0"
title Troublio - IndexNow URL Gonderimi

echo.
echo ============================================
echo   TROUBLIO INDEXNOW GONDERIMI
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [HATA] Node.js bulunamadi. Once Node.js 22 kurun.
  pause
  exit /b 1
)

echo Sitemap okunuyor ve URL'ler IndexNow'a gonderiliyor...
node scripts\submit-indexnow.mjs
if errorlevel 1 (
  echo.
  echo [HATA] Gonderim basarisiz. Site deploy edilmis ve sitemap aciliyor olmali.
  pause
  exit /b 1
)

echo.
echo [TAMAM] URL'ler IndexNow'a bildirildi.
pause
