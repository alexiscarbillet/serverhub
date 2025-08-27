# Azure NC-Series: GPU-Optimized Virtual Machines

Microsoft Azure offers the **NC-series**, a family of **GPU-optimized virtual machines** designed for high-performance computing (HPC), AI, and deep learning workloads. NC-series VMs combine powerful NVIDIA GPUs with high-performance CPUs for compute-intensive tasks.

## Key Features of NC-Series

### 1. **Powered by NVIDIA GPUs**

* NC-series VMs are equipped with **NVIDIA Tesla K80, P100, or V100 GPUs**, depending on the generation.
* Optimized for **AI training, HPC simulations, and GPU-accelerated computing**.

### 2. **High-Performance CPUs**

* Uses **Intel Xeon E5 or Scalable processors**, providing strong CPU support for GPU workloads.
* Ensures efficient CPU-GPU interaction for demanding applications.

### 3. **GPU Memory**

* Each GPU provides **12–32 GB of GPU memory**, supporting large-scale deep learning and HPC models.
* Ideal for applications requiring high GPU memory and compute.

### 4. **High-Speed Networking**

* Supports **InfiniBand or high-throughput Ethernet**, ensuring low-latency communication for multi-GPU clusters.
* Optimized for distributed computing and HPC workloads.

### 5. **Flexible Machine Sizes**

* Predefined machine types range from **NC6** (1 GPU, 6 vCPUs) to **NC24** (4 GPUs, 24 vCPUs).
* Allows scaling based on workload requirements.

### 6. **Integration with Azure Ecosystem**

* Compatible with **Azure Machine Learning, Azure Storage, and other Azure services**.
* Supports NVIDIA CUDA, cuDNN, TensorFlow, and PyTorch for optimized GPU workloads.

## Use Cases

* **AI and Machine Learning:** Model training, deep learning, and inference.
* **High-Performance Computing (HPC):** Simulations, scientific computing, and data modeling.
* **Graphics Rendering:** GPU-accelerated rendering for visualization and media applications.
* **Data Analytics:** GPU-accelerated analytics on large datasets.

## Instance Types and Specifications

| Instance Type | vCPUs | Memory | GPUs    | GPU Memory | Network |
| ------------- | ----- | ------ | ------- | ---------- | ------- |
| NC6           | 6     | 56 GB  | 1 x K80 | 12 GB      | 12 Gbps |
| NC12          | 12    | 112 GB | 2 x K80 | 24 GB      | 25 Gbps |
| NC24          | 24    | 224 GB | 4 x K80 | 48 GB      | 50 Gbps |
| NC24r         | 24    | 224 GB | 4 x K80 | 48 GB      | RDMA    |

*Note: Specifications and availability vary by region. See the [Azure NC-Series VMs](https://learn.microsoft.com/en-us/azure/virtual-machines/nc-series) page for the latest details.*

## Conclusion

Azure NC-series VMs provide **GPU-accelerated performance** for HPC, AI, and deep learning workloads. With NVIDIA Tesla GPUs, high-performance CPUs, and scalable networking, NC-series VMs are ideal for enterprises, researchers, and developers requiring GPU power on Azure.
