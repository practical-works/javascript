@echo off
title List sources

dir styles /b
dir styles /b  > styles.txt
echo [Style sources listed !]

echo.

dir scripts /b
dir scripts /b > scripts.txt
echo [Script sources listed !]

echo.

pause