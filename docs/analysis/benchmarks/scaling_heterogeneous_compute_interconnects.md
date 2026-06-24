# Scaling Heterogeneous Compute Interconnects

The transition toward PCIe 6.0 and high-bandwidth coherent fabrics marks a fundamental shift in how we benchmark modern silicon. As we move beyond simple frequency scaling, performance is increasingly defined by the efficiency of the interconnect between compute tiles and memory subsystems. This article examines the architectural shifts in Blackwell, Zen 5, and Arrow Lake, focusing on the metrics that define the next era of high-performance computing.

## The PCIe 6.0 Paradigm and PAM4 Signaling

The industry is currently pivoting from PCIe 5.0 to PCIe 6.0, which doubles the data rate to 64 GT/s per lane. This is achieved through Pulse Amplitude Modulation 4-level (PAM4) signaling, replacing the traditional Non-Return-to-Zero (NRZ) encoding. 

The effective bandwidth $BW$ for a x16 link can be calculated as:
$BW_{total} = \frac{64 \times 10^9 \text{ bits/s} \times 16}{8} \times \text{Efficiency}$

Unlike PCIe 5.0, PCIe 6.0 introduces Forward Error Correction (FEC) to manage the higher bit-error rate (BER) associated with PAM4, ensuring that the $L_{latency}$ overhead remains negligible for real-time compute tasks.

## Blackwell Architecture and NVLink 5.0

NVIDIA’s Blackwell B200 utilizes a multi-die approach linked via a high-speed proprietary interconnect. The B200 features 20,480 CUDA cores and utilizes the second-generation Transformer Engine to optimize FP4 and FP8 throughput. A critical benchmark for Blackwell is the NVLink 5.0 interface, providing 1.8 TB/s of bidirectional bandwidth.

The compute density is managed by a massive TDP (Thermal Design Power) of up to 1000W for high-end variants. This power density requires sophisticated voltage regulator modules (VRMs) capable of handling transient loads that exceed nominal TDP by $1.5\times$ to $2\times$ during peak inference bursts.

## Zen 5 and IPC Advancements

AMD’s Zen 5 architecture focuses on Instruction Per Cycle (IPC) gains rather than raw clock speed. With an average IPC uplift of approximately 16% over Zen 4, the architecture achieves this through wider execution windows and improved branch prediction. 

The data path for AVX-512 has been expanded to a full 512-bit width, eliminating the "double-pumped" 256-bit approach seen in previous generations. The performance scaling of Zen 5 can be modeled using a modified version of Amdahl's Law to account for the heterogeneous nature of modern workloads:
$S = \frac{1}{(1-p) + \frac{p}{n \times IPC_{gain}}}$

Where $p$ is the parallel fraction of the code and $n$ is the number of cores.

## Arrow Lake and Disaggregated Tiling

Intel’s Arrow Lake architecture moves away from the monolithic die approach in favor of a disaggregated tile strategy using Foveros 3D packaging. The Compute Tile, manufactured on the Intel 20A or TSMC N3B process, separates P-cores (Lion Cove) and E-cores (Skymont). 

The P-cores feature a massive increase in L2 cache, moving to 3MB per core. This reduction in cache misses significantly lowers the $T_{access}$ latency, which is critical for single-threaded gaming and productivity benchmarks. 

## Technical Comparison of Leading Architectures

| Metric | NVIDIA Blackwell (B200) | AMD Zen 5 (9950X) | Intel Arrow Lake (U9) |
| :--- | :--- | :--- | :--- |
| **Primary Focus** | AI / Parallel Compute | General Purpose / IPC | Efficiency / Modular Tiles |
| **Interconnect** | NVLink 5.0 (1.8 TB/s) | Infinity Fabric G4 | DMI 4.0 / Fabric Link |
| **Core Count** | 20,480 CUDA Cores | 16C / 32T | 8P + 16E Cores |
| **Peak TDP** | 700W - 1000W | 170W (230W PPT) | 125W (250W MTP) |
| **L2 Cache** | 160MB (Shared) | 1MB per Core | 3MB per P-Core |
| **Interface** | PCIe 6.0 Ready | PCIe 5.0 / 6.0 Ready | PCIe 5.0+ |

## Thermal Management and Power Delivery

The scaling of performance is now strictly limited by the $T_{junction}$ temperature and the ability to dissipate heat. As TDP increases across all platforms, the importance of the Power Usage Effectiveness (PUE) at the chip level becomes paramount. 

The relationship between power $P$, capacitance $C$, voltage $V$, and frequency $f$ remains the governing factor for architectural efficiency:
$P = C \times V^2 \times f$

By shifting to smaller process nodes (3nm/4nm), manufacturers reduce $C$, allowing for higher $f$ at lower $V$, though leakage current at these scales presents a significant challenge for idle power consumption. Arrow Lake’s use of Backside Power Delivery (PowerVia) is specifically designed to mitigate $IR$ drop and improve the efficiency of power delivery to the logic gates.