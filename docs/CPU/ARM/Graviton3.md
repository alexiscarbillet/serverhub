---
tags:
  - CPU
  - ARM
---

# AWS Graviton3

The **AWS Graviton3** is Amazon Web Services' third-generation custom ARM-based processor, introduced in 2022. Designed by Annapurna Labs, Graviton3 delivers significant advancements in performance, efficiency, and scalability for cloud workloads, continuing AWS's commitment to custom silicon tailored for the cloud.

---

## Key Specifications

- **Architecture**: ARMv8.4-A (64-bit RISC)
- **Core Count**: 64 cores based on ARM Neoverse V1 microarchitecture
- **Clock Speed**: 2.6 GHz
- **Transistor Count**: Approximately 55 billion
- **Memory Support**: 8 channels of DDR5-4800 ECC memory
- **PCIe Support**: 32 lanes of PCIe 5.0
- **Chiplet Design**: 7-chiplet configuration with a central compute die and separate memory and I/O chiplets
- **Floating-Point Performance**: Up to 2× higher than Graviton2
- **Machine Learning Performance**: Up to 3× better performance for ML workloads, including support for bfloat16

---

## Architectural Enhancements

### 1. ARM Neoverse V1 Cores

Graviton3 utilizes ARM's Neoverse V1 cores, offering improved performance per clock cycle compared to the previous generation. This enhancement contributes to higher throughput and better energy efficiency, making it suitable for a wide range of applications.

### 2. Advanced Memory Architecture

The processor supports 8 channels of DDR5-4800 ECC memory, providing up to 50% more memory bandwidth compared to DDR4. This increase in bandwidth is crucial for data-intensive applications, ensuring faster data access and processing.

### 3. Enhanced Floating-Point and Cryptographic Performance

Graviton3 delivers up to 2× higher floating-point performance and up to 2× faster cryptographic workload performance compared to Graviton2. These improvements are beneficial for applications requiring intensive mathematical computations and secure data processing.

### 4. Machine Learning Optimizations

The processor includes support for bfloat16, a format commonly used in machine learning models. This optimization enables more efficient processing of AI workloads, leading to faster inference times and reduced energy consumption.

---

## EC2 Instance Families Powered by Graviton3

AWS offers several EC2 instance families powered by Graviton3 processors:

- **C7g**: Compute-optimized instances ideal for high-performance computing (HPC), batch processing, and scientific modeling.
- **M7g**: General-purpose instances suitable for a variety of workloads, including web servers and small to medium-sized databases.
- **R7g**: Memory-optimized instances designed for workloads requiring high memory capacity, such as in-memory caches and real-time big data analytics.
- **C7gd**, **M7gd**, **R7gd**: These variants include local NVMe-based SSD storage for applications requiring high I/O performance.

---

## Performance and Efficiency

Graviton3 processors offer up to 25% better compute performance and up to 60% lower energy consumption for the same performance compared to comparable x86-based EC2 instances. This efficiency translates to cost savings and a smaller carbon footprint for cloud operations.

---

## Industry Adoption

Several organizations have adopted Graviton3-based instances for their workloads:

- **Twitter**: Achieved 20–80% higher performance and reduced tail latencies by up to 35% by migrating to Graviton3-based C7g instances.
- **AWS CodeBuild**: Noticed up to 25% higher performance, enabling faster build times and improved developer productivity.

---

## Summary

The **AWS Graviton3** processor represents a significant advancement in custom ARM-based silicon, offering improved performance, efficiency, and scalability for cloud workloads. Its architectural enhancements and optimizations for machine learning make it a compelling choice for organizations looking to optimize their cloud infrastructure.
