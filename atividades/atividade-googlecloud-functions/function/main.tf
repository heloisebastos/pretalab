provider "google" {
  project = var.idprojeto
  region  = var.region  
  
}

resource "google_storage_bucket" "function_bucket" {
  name     = "meu-bucket-funcao"
  location = var.location
}

resource "null_resource" "zip_function" {
  provisioner "local-exec" {
    command = "zip -r function.zip main.py requirements.txt" 
  }
}

resource "google_storage_bucket_object" "function_zip" {
  name   = "function.zip"
  bucket = google_storage_bucket.function_bucket.name
  source = "function.zip"  # O arquivo zip da função
}

resource "google_cloudfunctions_function" "http_function" {
  name        = "mainHttp"
  runtime     = "python312"  
  entry_point = "main_http"  # O nome da função que será chamada

  source_archive_bucket = google_storage_bucket.function_bucket.name
  source_archive_object = google_storage_bucket_object.function_zip.name

  trigger_http = true
}


resource "google_cloudfunctions_function_iam_member" "invoker" {
  project        = google_cloudfunctions_function.http_function.project
  region         = google_cloudfunctions_function.http_function.region
  cloud_function = google_cloudfunctions_function.http_function.name

  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"  
}


