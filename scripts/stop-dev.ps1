# Stop Next.js dev server and free port 3000 (Windows)
$port = 3000

Write-Host "Checking port $port..."

$connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
$pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique

if (-not $pids) {
  Write-Host "Port $port is free - no dev server found."
  exit 0
}

foreach ($processId in $pids) {
  if ($processId -le 0) { continue }
  taskkill /PID $processId /T /F 2>$null | Out-Null
  Write-Host "Stopped PID $processId (and children)"
}

Start-Sleep -Seconds 1
$still = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($still) {
  Write-Host "WARNING: port $port still in use"
  exit 1
}

Write-Host "Done - port $port is free."
