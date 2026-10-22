@echo off
title Cafe Espanol - ZIP Packager
echo ========================================================
echo   CAFE ESPANOL - Generating cafe-espanol.zip
echo ========================================================
echo.
echo Packaging all project files into cafe-espanol.zip...

:: Method 1: Built-in Windows 10/11 tar command
tar -a -c -f cafe-espanol.zip index.html style.css bundle.js js README.md REFLECTION_TEMPLATE.md 2>nul

if exist cafe-espanol.zip (
    echo.
    echo [SUCCESS] cafe-espanol.zip was created successfully!
    echo Location: %~dp0cafe-espanol.zip
    echo.
    echo You can now push these files to your new GitHub repository.
    goto :end
)

:: Method 2: Fallback to built-in PowerShell Compress-Archive
echo Using PowerShell Compress-Archive fallback...
powershell -NoProfile -Command "Compress-Archive -Path index.html, style.css, bundle.js, js, README.md, REFLECTION_TEMPLATE.md -DestinationPath cafe-espanol.zip -Force"

if exist cafe-espanol.zip (
    echo.
    echo [SUCCESS] cafe-espanol.zip was created successfully via PowerShell!
    echo Location: %~dp0cafe-espanol.zip
) else (
    echo.
    echo [NOTE] You can also right-click this folder and select "Compress to ZIP file".
)

:end
echo.
pause
