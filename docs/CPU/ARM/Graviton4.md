---
tags:
  - CPU
  - ARM
---

# AWS Graviton4

The **AWS Graviton4** is Amazon Web Services' fourth-generation custom ARM-based processor, introduced in 2024. Building upon the advancements of its predecessors, Graviton4 offers significant improvements in performance, memory bandwidth, and scalability, making it ideal for a wide range of cloud workloads.

---

## Key Specifications

- **Architecture**: ARMv9.0-A (64-bit RISC)
- **Core Count**: Up to 96 cores based on ARM Neoverse V2 microarchitecture
- **Clock Speed**: 2.7 GHz (192 cores) / 2.8 GHz (96 cores)
- **L2 Cache**: 2 MB per core (192 MB total)
- **Memory Support**: 12 channels of DDR5-5600 ECC memory
- **Memory Capacity**: Up to 3 TiB
- **PCIe Support**: 32 lanes of PCIe 5.0
- **Chiplet Design**: 7-chiplet configuration with compute, memory, and I/O chiplets
- **Security Features**: Always-on memory encryption, Branch Target Identification (BTI), and encrypted high-speed interfaces

---

## Architectural Enhancements

### 1. ARM Neoverse V2 Cores

Graviton4 utilizes ARM's Neoverse V2 cores, offering improved performance per clock cycle compared to previous generations. These cores are designed to handle demanding workloads efficiently, providing a balance between performance and power consumption.

### 2. Advanced Memory Architecture

The processor supports 12 channels of DDR5-5600 ECC memory, providing up to 160% more memory bandwidth compared to Graviton3. This increase in bandwidth is crucial for data-intensive applications, ensuring faster data access and processing.

### 3. Enhanced Floating-Point and Cryptographic Performance

Graviton4 delivers up to 60% higher processing power compared to Graviton3, with improvements in floating-point and cryptographic workload performance. These enhancements are beneficial for applications requiring intensive mathematical computations and secure data processing.

### 4. Machine Learning Optimizations

The processor includes support for bfloat16, a format commonly used in machine learning models. This optimization enables more efficient processing of AI workloads, leading to faster inference times and reduced energy consumption.

---

## EC2 Instance Families Powered by Graviton4

AWS offers several EC2 instance families powered by Graviton4 processors:

- **R8g**: Memory-optimized instances ideal for high-performance databases, in-memory caches, and real-time big data analytics.
- **X8g**: Memory-optimized instances with up to 3 TiB of DDR5 memory, suitable for memory-intensive workloads such as SAP HANA and Electronic Design Automation (EDA).
- **C8g**: Compute-optimized instances designed for high-performance computing (HPC), batch processing, and scientific modeling.
- **M8g**: General-purpose instances suitable for a variety of workloads, including web servers and small to medium-sized databases.
- **I8g**: Instances optimized for I/O-intensive workloads, offering high throughput and low latency for applications like AdTech and real-time analytics.

---

## Performance and Efficiency

Graviton4 processors offer up to 40% better performance and up to 29% better price-performance compared to Graviton3-based instances. These improvements are achieved through architectural enhancements, increased memory bandwidth, and optimized power efficiency.

---

## Industry Adoption

Several organizations have adopted Graviton4-based instances for their workloads:

- **Epic Games**: Found Graviton4 instances to be the fastest EC2 instances they have ever tested, enabling improved performance for their applications.
- **Honeycomb.io**: Achieved more than double the throughput per vCPU compared to the non-Graviton-based instances they used four years ago.
- **SmugMug**: Observed 20–40% performance improvements using Graviton4-based instances compared to Graviton3-based instances for their image and data compression operations.

---

## Summary

The **AWS Graviton4** processor represents a significant advancement in custom ARM-based silicon, offering improved performance, memory bandwidth, and scalability for cloud workloads. Its architectural enhancements and optimizations make it a compelling choice for organizations looking to optimize their cloud infrastructure.
