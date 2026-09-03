
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asyncNoProgress = [System.Windows.Forms.Application]

[Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null

$path = 'c:\Users\muham\Documents\Github\Porto\Portfolio\public\images\certificates\certificate_internship.png'
$fileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
$asTask = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Length -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' } | Select-Object -First 1

$fileTaskGeneric = $asTask.MakeGenericMethod([Windows.Storage.StorageFile])
$file = $fileTaskGeneric.Invoke($null, @($fileTask)).Result

$streamTask = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
$streamTaskGeneric = $asTask.MakeGenericMethod([Windows.Storage.Streams.IRandomAccessStream])
$stream = $streamTaskGeneric.Invoke($null, @($streamTask)).Result

$decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$decoderTaskGeneric = $asTask.MakeGenericMethod([Windows.Graphics.Imaging.BitmapDecoder])
$decoder = $decoderTaskGeneric.Invoke($null, @($decoderTask)).Result

$bitmapTask = $decoder.GetSoftwareBitmapAsync()
$bitmapTaskGeneric = $asTask.MakeGenericMethod([Windows.Graphics.Imaging.SoftwareBitmap])
$bitmap = $bitmapTaskGeneric.Invoke($null, @($bitmapTask)).Result

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new('id-ID'))
if (-not $engine) { $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages() }

$resultTask = $engine.RecognizeAsync($bitmap)
$resultTaskGeneric = $asTask.MakeGenericMethod([Windows.Media.Ocr.OcrResult])
$result = $resultTaskGeneric.Invoke($null, @($resultTask)).Result

Write-Output $result.Text
