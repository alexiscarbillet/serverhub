---
tags:
  - Cloud compute
  - Azure
  - GPU
---

# Azure ND-Series: AI and Deep Learning GPU Virtual Machines

Microsoft Azure offers the **ND-series**, a family of **GPU-optimized virtual machines** designed specifically for **AI training, deep learning, and high-performance compute workloads**. ND-series VMs combine powerful NVIDIA GPUs with high-performance CPUs and fast interconnects for large-scale AI and HPC tasks.

## Key Features of ND-Series

### 1. **Powered by NVIDIA GPUs**

* ND-series VMs use **NVIDIA Tesla V100 or A100 Tensor Core GPUs**, optimized for AI, deep learning, and HPC applications.
* Supports FP32, FP16, and mixed-precision workloads for optimal AI training performance.

### 2. **High-Performance CPUs**

* Equipped with **Intel Xeon Scalable processors**, delivering strong performance to support GPU-intensive tasks.
* Ensures balanced CPU-GPU performance for AI model training and inference.

### 3. **Massive GPU Memory**

* Each GPU provides **16–40 GB of high-bandwidth memory**, enabling training of large-scale deep learning models.
* Suitable for deep neural networks, AI research, and HPC simulations.

### 4. **High-Speed Networking**

* Supports **InfiniBand with RDMA**, providing low-latency communication for multi-GPU and clustered workloads.
* Optimized for distributed AI training and HPC tasks.

### 5. **Flexible Machine Types**

* Predefined types range from **ND6** (1 GPU) to **ND40rs\_v2** (8 GPUs) for multi-node AI clusters.
* Customizable for varying AI training and inference requirements.

### 6. **Integration with Azure Services**

* Compatible with **Azure Machine Learning, Azure Storage, and AI tools**.
* Supports NVIDIA CUDA, cuDNN, TensorFlow, PyTorch, and other frameworks for optimized GPU workloads.

## Use Cases

* **Deep Learning and AI Training:** Large-scale neural network training.
* **High-Performance Computing (HPC):** Scientific simulations, financial modeling, and computational research.
* **Distributed AI Workloads:** Multi-GPU clusters for AI pipelines.
* **Inference and Analytics:** Real-time AI inference on large datasets.

## Instance Types and Specifications

| Instance Type | vCPUs | Memory | GPUs     | GPU Memory | Network    |
| ------------- | ----- | ------ | -------- | ---------- | ---------- |
| ND6           | 6     | 112 GB | 1 x V100 | 16 GB      | InfiniBand |
| ND12          | 12    | 224 GB | 2 x V100 | 32 GB      | InfiniBand |
| ND24          | 24    | 448 GB | 4 x V100 | 64 GB      | InfiniBand |
| ND40rs\_v2    | 40    | 672 GB | 8 x V100 | 128 GB     | InfiniBand |

*Note: Specifications and availability vary by region. See the [Azure ND-Series VMs](https://learn.microsoft.com/en-us/azure/virtual-machines/nd-series) page for current details.*

## Conclusion

Azure ND-series VMs provide **highly optimized GPU performance** for AI, deep learning, and HPC workloads. With NVIDIA Tesla GPUs, high-bandwidth GPU memory, and low-latency networking, ND-series VMs are ideal for enterprises and researchers running large-scale AI training and compute-intensive applications on Azure.
