---
title: How Storage Works
tags:
  - Storage
---

# How Storage Works

Storage is the **long-term memory** of a computer system. Unlike RAM, it **retains data even when the power is off**. Storage devices keep your operating system, applications, files, and all digital content accessible over time.

Modern computers use a mix of **HDDs** (Hard Disk Drives), **SSDs** (Solid State Drives), and sometimes specialized storage like **NVMe** or **network-attached storage**.

---

## 1. Storage vs Memory

* **Storage** → Long-term data retention (e.g., HDD, SSD, USB drive).
* **Memory (RAM)** → Short-term, fast, temporary workspace.

When you open a program, the data is loaded **from storage into RAM**. When you save a file, the data is written **from RAM back to storage**.

---

## 2. Main Types of Storage

| Type                  | Description                                  | Speed              | Durability | Typical Use                |
| --------------------- | -------------------------------------------- | ------------------ | ---------- | -------------------------- |
| HDD                   | Mechanical hard drive with spinning platters | Moderate           | High       | Bulk storage, archives     |
| SSD                   | Solid-state drive with NAND flash memory     | Fast               | Very High  | OS, apps, games            |
| NVMe                  | SSD using PCIe bus for data transfer         | Very Fast          | Very High  | High-performance computing |
| External Storage      | USB drives, external HDD/SSD                 | Variable           | Variable   | Backup, portability        |
| Network Storage (NAS) | Storage accessed over network                | Depends on network | High       | Shared data, servers       |

---

## 3. How HDD Works (Magnetic Storage)

Hard Disk Drives store data **magnetically** on spinning platters.

* **Platters**: Circular disks coated with a magnetic material.
* **Spindle Motor**: Spins the platters at thousands of RPM (e.g., 5400 or 7200 RPM).
* **Read/Write Head**: Mounted on an actuator arm, it moves across the platter surface.
* **Tracks & Sectors**: Data is stored in concentric tracks divided into sectors.

### How it works:

1. The operating system sends a request to read or write data.
2. The drive spins the platters to the correct position.
3. The head moves to the right track.
4. Data is read or written magnetically.

This **mechanical nature** makes HDDs slower than SSDs but more affordable for large capacities.

---

## 4. How SSD Works (Flash Storage)

Solid-State Drives use **NAND flash memory** to store data electronically.

* **NAND Flash Cells** store bits using electrical charges.
* **Controller** manages where data is stored and retrieved.
* **No moving parts**, which makes SSDs faster, quieter, and more resistant to shock.

### How it works:

1. The controller receives a read/write request.
2. Data is accessed directly from flash cells.
3. Since no physical movement is required, response time is measured in microseconds.

SSDs are ideal for operating systems, applications, and any workload requiring fast access.

---

## 5. NVMe Storage (PCIe Interface)

NVMe (Non-Volatile Memory Express) is a **protocol designed specifically for flash memory**. Unlike SATA, which was built for HDDs, NVMe uses the **PCIe bus** to transfer data at much higher speeds.

* Supports **parallel queues** and **low latency**.
* Can reach speeds of several **GB/s** compared to a few hundred MB/s for SATA.
* Common in modern laptops, desktops, and servers.

---

## 6. File System and Storage

The physical storage is only part of the picture. Data must be **organized** so the OS can find and manage it.

Popular file systems include:

| File System   | OS             | Characteristics                     |
| ------------- | -------------- | ----------------------------------- |
| NTFS          | Windows        | Journaling, permissions, encryption |
| ext4          | Linux          | Stable, fast, widely used           |
| APFS          | macOS          | Modern Apple file system            |
| FAT32 / exFAT | Cross-platform | Simpler, less secure                |

The **file system handles**:

* How files are named and stored.
* How free space is tracked.
* How files are read and modified efficiently.

---

## 7. Blocks, Sectors, and Pages

Storage devices divide data into **small units**:

* **Sectors** (HDD) – Typically 512 bytes or 4096 bytes.
* **Pages and Blocks** (SSD) – Data is written in pages and erased in larger blocks.

This structure affects **read/write performance** and **wear leveling** (in SSDs).

---

## 8. Wear Leveling and Endurance in SSDs

Since flash memory can only be written a limited number of times, SSDs use **wear leveling** to spread writes evenly across cells.

Additional technologies like:

* **TRIM** – Helps maintain performance over time.
* **Over-provisioning** – Reserves spare space to replace worn-out cells.

SSDs are durable and can last for many years under normal use.

---

## 9. RAID and Redundancy

RAID (Redundant Array of Independent Disks) combines multiple drives to improve performance and/or reliability:

| RAID Level | Description            | Benefit                         |
| ---------- | ---------------------- | ------------------------------- |
| RAID 0     | Striping across drives | High speed, no redundancy       |
| RAID 1     | Mirroring              | Data safety                     |
| RAID 5     | Striping with parity   | Balance of speed and redundancy |
| RAID 10    | Stripe + Mirror        | High speed + safety             |

RAID is often used in servers, workstations, and NAS systems.

---

## 10. Storage Interfaces

| Interface   | Speed              | Used With       | Notes              |
| ----------- | ------------------ | --------------- | ------------------ |
| SATA        | Up to 600 MB/s     | HDD & SSD       | Common in desktops |
| PCIe (NVMe) | Up to several GB/s | SSD             | High performance   |
| USB         | Variable           | External drives | Portable           |
| SAS         | Enterprise level   | HDD & SSD       | High reliability   |

The interface determines how fast data moves between storage and the CPU.

---

## 11. Monitoring Storage Health

Healthy storage is crucial for performance and data safety. Common tools and metrics include:

* **SMART** (Self-Monitoring, Analysis and Reporting Technology) for HDD/SSD health.
* **I/O performance monitoring** (IOPS, throughput, latency).
* **Temperature and wear-level checks** for SSDs.
* Regular **backups** to avoid data loss.

---

## 12. Summary

| Component            | Role                                               |
| -------------------- | -------------------------------------------------- |
| HDD Platters & Heads | Magnetic data storage with moving parts            |
| SSD NAND Flash       | Electronic storage with no moving parts            |
| NVMe                 | High-speed storage protocol using PCIe             |
| File System          | Organizes data for OS access                       |
| RAID                 | Combines multiple drives for performance or safety |
| Interfaces           | Control data transfer speed and connectivity       |

Storage is the **foundation of data persistence** in computing. Choosing the right type of storage — and managing it properly — impacts speed, reliability, and overall system performance.

You can find more information on [ac-electricity.com](https://ac-electricity.com/hardware/storage/).