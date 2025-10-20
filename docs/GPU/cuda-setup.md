---
title: Setting Up CUDA on Ubuntu
tags:
  - GPU
---

# Setting Up CUDA on Ubuntu

Installing CUDA correctly is essential to run GPU workloads efficiently on your server.
This guide walks you through the installation of NVIDIA drivers, CUDA Toolkit, and verification steps on Ubuntu.

---

## 1. Check Your GPU

Before installing anything, confirm that your GPU is detected by the system.

Command:

```
lspci | grep -i nvidia
```

If your GPU appears in the list, the system recognizes it.

Optional: Check kernel version

```
uname -r
```

---

## 2. Remove Old Drivers (if necessary)

To avoid conflicts, remove any existing NVIDIA drivers:

```
sudo apt purge nvidia*
sudo apt autoremove
```

Reboot afterward:

```
sudo reboot
```

---

## 3. Add the NVIDIA Repository

First, update your system:

```
sudo apt update
sudo apt upgrade -y
```

Then add the NVIDIA package repository:

```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt update
```

---

## 4. Install the Latest Driver

You can either install manually or let Ubuntu pick the recommended driver:

```
sudo ubuntu-drivers devices
sudo ubuntu-drivers autoinstall
```

Alternatively, install a specific driver:

```
sudo apt install nvidia-driver-550
```

After installation, reboot:

```
sudo reboot
```

---

## 5. Verify Driver Installation

Once the system is back online, check if the GPU is recognized:

```
nvidia-smi
```

Expected output:

* GPU model and driver version
* Temperature and power usage
* Memory usage
* CUDA version displayed

If `nvidia-smi` returns an error, the driver did not install properly.

---

## 6. Install CUDA Toolkit

Install the CUDA Toolkit (matching your driver version):

```
sudo apt install cuda
```

You can also specify a version:

```
sudo apt install cuda-12-4
```

Add CUDA to your PATH:

```
echo 'export PATH=/usr/local/cuda/bin:$PATH' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
source ~/.bashrc
```

---

## 7. Verify CUDA Installation

Check the CUDA version:

```
nvcc --version
```

or

```
cat /usr/local/cuda/version.txt
```

Run `nvidia-smi` again to confirm the CUDA driver and toolkit match.

---

## 8. Install cuDNN (Optional but Recommended)

cuDNN is required for many deep learning frameworks.

Download cuDNN from:
[https://developer.nvidia.com/cudnn](https://developer.nvidia.com/cudnn)

Install the `.deb` package or extract manually into `/usr/local/cuda`.

Example (for .deb package):

```
sudo dpkg -i libcudnn*.deb
```

Verify:

```
cat /usr/include/cudnn_version.h | grep CUDNN_MAJOR -A 2
```

---

## 9. Test CUDA with a Sample Program

NVIDIA provides sample programs to test the installation:

```
cd /usr/local/cuda/samples
sudo make -j$(nproc)
cd bin/x86_64/linux/release
./deviceQuery
```

You should see:

```
Result = PASS
```

This confirms CUDA is installed and working correctly.

---

## 10. Troubleshooting Tips

* If `nvidia-smi` doesn’t work after reboot, check Secure Boot. Disable Secure Boot in BIOS if needed.
* Make sure kernel headers are installed:

  ```
  sudo apt install linux-headers-$(uname -r)
  ```
* Reinstall the driver if the kernel was upgraded.
* Check logs with:

  ```
  dmesg | grep -i nvidia
  ```

---

## 11. Useful Commands

* `nvidia-smi` — check GPU status
* `nvcc --version` — check CUDA version
* `which nvcc` — check if CUDA path is configured
* `cat /proc/driver/nvidia/version` — driver info

---

## 🧭 Related Articles

* [How a GPU Works](GPU.md)
* [Choosing the Right GPU for Your Server](choosing-gpu.md)
* [Monitoring GPU Usage on Linux Servers](gpu-monitoring.md)
