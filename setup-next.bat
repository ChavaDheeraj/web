@echo off
echo ========================================================
echo Trigarty Architecture Pivot: Fixing NPM Naming Error
echo ========================================================
echo.
echo Step 1: Cleaning up failed installation files...
del /q package.json 2>nul
del /q package-lock.json 2>nul
rmdir /s /q node_modules 2>nul

echo.
echo Step 2: Scaffolding Next.js (Using a safe lowercase folder name)...
call npx create-next-app@latest trigarty-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes

echo.
echo Step 3: Moving files to current directory...
xcopy /E /Y /H trigarty-app\* .
rmdir /s /q trigarty-app

echo.
echo Step 4: Installing Advanced Animation Libraries...
call npm install framer-motion next-themes lucide-react clsx tailwind-merge

echo.
echo Step 5: Installing Sanity CMS dependencies...
call npm install next-sanity @sanity/client @sanity/image-url

echo.
echo Step 6: Initializing shadcn/ui...
call npx shadcn@latest init -d

echo.
echo ========================================================
echo SETUP COMPLETE!
echo You can now close this window and I will begin coding
echo the new futuristic Framer Motion components!
echo ========================================================
pause
