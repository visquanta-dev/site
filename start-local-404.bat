@echo off
cd /d "%~dp0"
if exist ".next\dev\lock" del /f /q ".next\dev\lock" 2>nul
cls
echo.
echo  VisQuanta local preview - use Chrome or Edge (not Cursor)
echo  ---------------------------------------------------------
echo   404 preview:   http://127.0.0.1:3333/404-preview
echo   Fake 404 URL:  http://127.0.0.1:3333/this-does-not-exist
echo   Home:          http://127.0.0.1:3333/
echo.
echo  Ctrl+C stops the server.
echo.
call npm run dev:browser
pause