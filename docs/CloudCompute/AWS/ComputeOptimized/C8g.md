---
tags:
  - Cloud compute
  - AWS
  - Compute Optimized
---

# **AWS C8g Instances: Graviton4–Powered Compute with Next-Level Performance**

Amazon’s compute-optimized lineup continues to evolve, and the **C8g family** represents the latest leap forward. Powered by **AWS Graviton4** processors, these instances deliver substantial performance gains for compute-intensive workloads—perfect for modern, demanding applications.

---

### **Overview**

* **Processor**: AWS Graviton4 (Arm-based Neoverse V2 cores), offering **up to 30% better compute performance** compared to Graviton3 (C7g) instances ([Amazon Web Services, Inc.][1]).
* Designed for high-performance, compute-intensive tasks such as HPC, gaming, batch processing, ML inference, scientific modeling, video encoding, ad serving, and distributed analytics ([Amazon Web Services, Inc.][1]).
* Built on the AWS **Nitro System**, ensuring high performance, security, and isolation through custom hardware and lightweight virtualization ([Amazon Web Services, Inc.][1], [AWS Documentation][2]).
* Includes enhanced security features like always-on memory encryption, dedicated vCPU caches, and pointer authentication ([Amazon Web Services, Inc.][1]).

---

### **Instance Sizes & Specs**

C8g offers a wide range of sizes—from compact to ultra-large—with the latest **DDR5-5600 memory**, expanded resources, and higher throughput ([Amazon Web Services, Inc.][3]).

| Instance                                       | vCPUs           | Memory (GiB)  | Network BW (Gbps) | EBS BW (Gbps) |
| ---------------------------------------------- | --------------- | ------------- | ----------------- | ------------- |
| `c8g.medium`                                   | 1               | 2             | Up to 12.5        | Up to 10      |
| `c8g.large`                                    | 2               | 4             | Up to 12.5        | Up to 10      |
| `c8g.xlarge`                                   | 4               | 8             | Up to 12.5        | Up to 10      |
| `c8g.2xlarge`                                  | 8               | 16            | Up to 15          | Up to 10      |
| `c8g.4xlarge`                                  | 16              | 32            | Up to 15          | Up to 10      |
| `c8g.8xlarge`                                  | 32              | 64            | 15                | 10            |
| `c8g.12xlarge`                                 | 48              | 96            | 22.5              | 15            |
| `c8g.16xlarge`                                 | 64              | 128           | 30                | 20            |
| `c8g.24xlarge`                                 | 96              | 192           | 40                | 30            |
| `c8g.48xlarge`                                 | 192             | 384           | 50                | 40            |
| Bare Metal Options: `metal-24xl`, `metal-48xl` | Same as 24x/48x | Same as above | Same as above     | Same as above |

Additionally, variants like **C8gd** (with **local NVMe SSD storage**) and **C8gn** (optimized for extreme **network bandwidth**, up to 600 Gbps) are also available ([Amazon Web Services, Inc.][1]).

These newer Graviton4 instances bring up to:

* **3× more vCPUs and memory** than their Graviton3-based predecessors,
* **75% more memory bandwidth**,
* **Double the L2 cache**,
* **Up to 50 Gbps networking** and **40 Gbps EBS bandwidth** ([Amazon Web Services, Inc.][3]).

---

### **Use Cases**

C8g is ideally suited for:

* High-performance computing (HPC)
* Scientific and batch processing
* Video encoding and gaming servers
* Machine Learning (CPU inference)
* Ad serving and distributed analytics

The high compute density, memory bandwidth, and scalable network I/O make C8g a perfect match for modern, demanding workloads.

---

### **Benefits at a Glance**

1. **Up to 30% higher compute performance** vs Graviton3-based C7g ([Amazon Web Services, Inc.][1]).
2. **Larger instance sizes**, better suited for scaling workloads.
3. **Superior memory and cache architecture**: DDR5 memory, more L2 cache.
4. **Improved networking and EBS performance**: up to 50 Gbps and 40 Gbps respectively.
5. **Enhanced security** features such as pointer authentication and always-on memory encryption ([Amazon Web Services, Inc.][1]).
6. **Flexible variants**: choose C8gd for fast local storage or C8gn for maximal networking needs.

---

### **Performance & Pricing Insights**

For example, the `c8g.8xlarge` delivers **32 vCPUs and 64 GiB RAM**, with an observed clock speed of approximately **2.8 GHz** on Neoverse-V2 cores ([sparecores.com][4]).

According to benchmark data, the `c8g.large` averages a Passmark single-threaded score of **\~1912**, with on-demand pricing around **\$0.08/hour** and spot pricing often **\~50–60% cheaper** ([RunsOn][5]).

---

### **Availability**

AWS launched C8g and M8g instances with general availability on **September 25, 2024** ([Amazon Web Services, Inc.][3]). Initially, these appeared in regions like **US East (N. Virginia), US East (Ohio), US West (Oregon), and Europe (Frankfurt)** ([Amazon Web Services, Inc.][6]). Availability may vary across specific Availability Zones, a known quirk when new instance types are rolled out ([Reddit][7]).

---

### **Conclusion**

The AWS **C8g instance family**, powered by **Graviton4**, offers a compelling blend of high compute performance, scalable memory, and advanced architecture for compute-centric workloads. With features like DDR5 memory, enhanced security, and variants for storage or networking intensity, C8g provides a powerful, cost-efficient platform — especially if your workloads are Arm-compatible.

[1]: https://aws.amazon.com/ec2/instance-types/c8g/?utm_source=chatgpt.com "Amazon EC2 C8g Instances"
[2]: https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html?utm_source=chatgpt.com "Instances built on the AWS Nitro System - Amazon EC2"
[3]: https://aws.amazon.com/blogs/aws/run-your-compute-intensive-and-general-purpose-workloads-sustainably-with-the-new-amazon-ec2-c8g-m8g-instances/?utm_source=chatgpt.com "Run your compute-intensive and general purpose ..."
[4]: https://sparecores.com/server/aws/c8g.8xlarge?utm_source=chatgpt.com "c8g.8xlarge by Amazon Web Services"
[5]: https://runs-on.com/benchmarks/aws-ec2-instances/c8g.large/?utm_source=chatgpt.com "Benchmarks for c8g.large (AWS)"
[6]: https://aws.amazon.com/about-aws/whats-new/2024/09/amazon-ec2-c8g-m8g-instances/?utm_source=chatgpt.com "Introducing Amazon EC2 C8g and M8g Instances"
[7]: https://www.reddit.com/r/aws/comments/1fqhao0/new_announced_c8g_instances_not_available_in/?utm_source=chatgpt.com "New announced c8g instances not available in Frankfurt ..."
