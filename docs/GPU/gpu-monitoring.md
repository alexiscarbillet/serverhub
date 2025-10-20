---
title: Monitoring GPU Usage on Linux Servers
tags:
  - GPU
---

# Monitoring GPU Usage on Linux Servers

Monitoring your **GPU performance** is essential to keep servers stable, avoid overheating, and ensure that workloads run efficiently.

This guide covers how to monitor GPUs on Linux servers using built-in and third-party tools.

---

## 1. Why GPU Monitoring Matters

GPU-intensive workloads like AI training, rendering, or analytics can **consume high power** and **generate a lot of heat**.

Regular monitoring helps you:

* 🖥️ Detect performance bottlenecks
* 🌡️ Prevent overheating and thermal throttling
* 📊 Optimize power and memory usage
* 🧠 Plan scaling and capacity

---

## 2. Checking NVIDIA GPUs with `nvidia-smi`

For NVIDIA GPUs, the most commonly used tool is:

```bash
nvidia-smi
```

This displays:

* GPU model and driver version
* Power consumption
* Memory usage
* GPU utilization
* Running processes

### Example output

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 550.54.14    Driver Version: 550.54.14    CUDA Version: 12.4     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  NVIDIA A100         On   | 00000000:65:00.0 Off |                    0 |
|  30%   62C    P0   280W / 400W|  20000MiB / 81920MiB |    90%      Default  |
+-------------------------------+----------------------+----------------------+
```

### Useful flags

* `nvidia-smi -l 1` → refresh every second
* `nvidia-smi --query-gpu=utilization.gpu,temperature.gpu,memory.used --format=csv` → custom metrics
* `nvidia-smi dmon` → real-time monitoring with graphs

---

## 3. AMD GPUs with `rocm-smi`

For AMD GPUs (ROCm stack):

```bash
rocm-smi
```

This gives similar information to `nvidia-smi`, including:

* Temperature
* Power draw
* Fan speed
* VRAM usage

### Example output

```
======================= ROCm System Management Interface =======================
GPU  Temp   AvgPwr  SCLK     MCLK     Fan  Perf  PwrCap  VRAM%  GPU%  
0    58.0c  220.0W  1500Mhz  800Mhz   45%  auto  300.0W  25%    80%
===============================================================================
```

💡 *You may need to install ROCm utilities:*

```bash
sudo apt install rocm-smi
```

---

## 4. Intel GPUs with `intel_gpu_top`

For Intel GPUs:

```bash
sudo intel_gpu_top
```

This provides a **real-time dashboard** similar to `htop` for CPU:

* GPU usage per engine
* Frequency and temperature
* Memory usage

> 📦 Install with:
>
> ```bash
> sudo apt install intel-gpu-tools
> ```

---

## 5. Using `watch` for Continuous Monitoring

You can combine monitoring commands with `watch` to update the display:

```bash
watch -n 1 nvidia-smi
```

or

```bash
watch -n 1 rocm-smi
```

This gives you **live GPU metrics** without external dashboards.

---

## 6. Logging GPU Metrics Over Time

For long-running training or compute jobs, it’s useful to **log metrics**:

```bash
nvidia-smi --query-gpu=timestamp,utilization.gpu,memory.used,temperature.gpu \
           --format=csv,noheader,nounits -l 5 >> gpu_usage_log.csv
```

* Logs every 5 seconds
* Can be plotted later for performance analysis

📊 You can visualize these logs using tools like:

* Python (Matplotlib / Pandas)
* Grafana (with exporters)
* Excel or Google Sheets

---

## 7. GPU Exporters for Grafana & Prometheus

For production environments, use **exporters** to integrate GPU metrics into monitoring dashboards.

| Tool                             | Vendor | Description                       |
| -------------------------------- | ------ | --------------------------------- |
| DCGM Exporter                    | NVIDIA | Exposes GPU metrics to Prometheus |
| rocm-exporter                    | AMD    | AMD ROCm Prometheus exporter      |
| Node Exporter + Intel GPU Plugin | Intel  | Intel GPU monitoring integration  |

🖥️ Typical dashboard metrics:

* GPU utilization
* VRAM usage
* Temperature and fan speed
* Power consumption
* ECC errors

---

## 8. Temperature & Thermal Control

Keeping the GPU at safe temperatures ensures:

* Better performance
* Longer lifespan
* Fewer crashes

| Temperature Range | Status             | Action Needed                      |
| ----------------- | ------------------ | ---------------------------------- |
| 30–70 °C          | Normal             | None                               |
| 70–85 °C          | High load          | Monitor closely                    |
| 85 °C+            | Critical threshold | Check airflow, consider throttling |

> 🔸 *Consider using rack fans or liquid cooling for dense GPU setups.*

---

## 9. Alerts & Automation

To avoid downtime:

* Set **Prometheus alerts** on temperature or utilization
* Use **systemd services or cron jobs** to monitor logs
* Trigger **shutdown or migration** if temps exceed limits

Example (simple shell alert):

```bash
#!/bin/bash
TEMP=$(nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader,nounits)
if [ "$TEMP" -gt 85 ]; then
  echo "⚠️ GPU Overheating: $TEMP °C" | mail -s "GPU Alert" admin@example.com
fi
```

---

## 10. Best Practices

✅ Enable persistence mode on NVIDIA GPUs:

```bash
sudo nvidia-smi -pm 1
```

✅ Use persistence mode to reduce latency for repeated jobs.
✅ Monitor not just utilization, but also **memory usage**, **temperature**, and **power**.
✅ For clusters, centralize monitoring with Prometheus + Grafana.
✅ Automate alerts to prevent downtime.

---

## 🧭 Related Articles

* [How a GPU Works](GPU.md)
* [Choosing the Right GPU for Your Server](choosing-gpu.md)
* [Setting Up CUDA on Ubuntu](cuda-setup.md)
