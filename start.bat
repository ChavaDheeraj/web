@echo off
echo ========================================================
echo Trigarty: Starting Next.js Dev Server
echo ========================================================
echo.
echo Installing dependencies manually (since npx scaffold failed)...
call npm install

echo.
echo Starting development server...
call npm run dev
pause
