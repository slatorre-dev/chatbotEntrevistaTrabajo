# PowerShell script para incrementar versión en version.txt
Set-StrictMode -Version Latest
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location (Join-Path $scriptDir '..')
if (-not (Test-Path -Path 'version.txt')) { '0.1.0' | Out-File -Encoding utf8 version.txt }
$ver = Get-Content version.txt -Raw
$parts = $ver.Trim().Split('.')
[int]$major = [int]$parts[0]
[int]$minor = [int]$parts[1]
[int]$patch = [int]$parts[2]
$patch += 1
$new = "{0}.{1}.{2}" -f $major,$minor,$patch
$new | Out-File -Encoding utf8 version.txt
git add version.txt
git commit -m "chore: bump version to $new" | Out-Null
Write-Output "Versión actualizada a $new"