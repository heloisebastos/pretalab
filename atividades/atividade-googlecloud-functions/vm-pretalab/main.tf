resource "google_compute_instance" "aprofundalab" {
  name         = var.namevm 
  machine_type = var.tipodemaquina 
  zone         = var.zona 

  tags = ["foo", "bar"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
      labels = {
        my_label = "value"
      }
    }
  }

  scratch_disk {
    interface = "NVME"
  }

  network_interface {
    network = "default"
  }
}