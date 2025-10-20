---
title: Understanding RAID
tags:
  - Storage
---

# Understanding RAID

**RAID** (Redundant Array of Independent Disks) is a technology that **combines multiple physical drives** into a single logical unit to improve **performance, reliability, or both**. It is commonly used in servers, workstations, and NAS devices.

---

## 1. Why RAID Is Used

RAID helps to:

* **Increase data reliability** by protecting against disk failure
* **Improve performance** by distributing read/write operations across multiple disks
* **Provide redundancy** so data can survive one or more disk failures
* **Simplify storage management** by combining multiple drives into a single logical volume

RAID is **not a backup substitute**. You still need separate backups for critical data.

---

## 2. Key Concepts

* **Stripe**: Data is split into blocks and distributed across multiple drives. Improves performance.
* **Mirror**: Data is duplicated across drives for redundancy. Improves reliability.
* **Parity**: Extra data calculated from original data blocks. Used to rebuild data if a drive fails.
* **Hot Spare**: A standby drive that automatically replaces a failed disk in some RAID setups.

---

## 3. Common RAID Levels

| RAID Level  | Description                 | Pros                            | Cons                                               | Typical Use                          |
| ----------- | --------------------------- | ------------------------------- | -------------------------------------------------- | ------------------------------------ |
| **RAID 0**  | Data striping across drives | High speed                      | No redundancy, risk of data loss                   | Gaming PCs, scratch disks            |
| **RAID 1**  | Mirroring drives            | Full redundancy                 | 50% usable storage                                 | Critical OS drives, small servers    |
| **RAID 5**  | Striping with parity        | Balance of speed and redundancy | Minimum 3 drives, slower writes                    | File servers, database servers       |
| **RAID 6**  | Striping with double parity | Can survive 2 drive failures    | Slower writes, needs 4+ drives                     | Enterprise storage                   |
| **RAID 10** | Stripe + Mirror (RAID 1+0)  | High speed + redundancy         | 50% usable storage, requires even number of drives | High-performance DBs, virtualization |

---

## 4. How RAID Works (Simplified)

### RAID 0 – Striping

```
Drive1: A1 A2 A3 A4
Drive2: B1 B2 B3 B4
```

* Data blocks are distributed across drives
* Fast reads/writes
* No fault tolerance

### RAID 1 – Mirroring

```
Drive1: A B C D
Drive2: A B C D
```

* All data is duplicated
* Fast reads (can read from either drive)
* 100% redundancy, 50% storage efficiency

### RAID 5 – Striping with Parity

```
Drive1: A1 A2 P1
Drive2: B1 P2 B2
Drive3: P3 C1 C2
```

* Parity blocks allow data recovery if one drive fails
* Good balance of speed, redundancy, and storage efficiency

---

## 5. Hardware vs Software RAID

### Hardware RAID

* Managed by a dedicated RAID controller card
* Offloads processing from CPU
* Often more reliable and faster
* Can include features like battery-backed cache

### Software RAID

* Managed by the OS (Linux MDADM, Windows Storage Spaces)
* Flexible and easier to configure
* Uses CPU resources
* Works even without a dedicated RAID card

---

## 6. RAID Considerations

* **Number of Drives**: Some levels require a minimum (RAID 5 → 3 drives, RAID 6 → 4 drives).
* **Performance**: Striping increases speed, mirroring doesn’t.
* **Redundancy**: Choose the level based on how critical your data is.
* **Storage Efficiency**: RAID 1 = 50% usable storage; RAID 5 = N-1 drives usable, etc.
* **Rebuild Time**: Large drives take longer to rebuild after a failure, which may risk another failure.

---

## 7. Monitoring and Maintenance

* Use SMART and RAID controller tools to monitor disk health.
* Schedule regular checks for consistency and integrity.
* Replace failed drives promptly to maintain redundancy.
* Keep backups — RAID protects against hardware failure, not accidental deletion or corruption.

---

## 8. Summary

RAID allows multiple disks to work together to provide **speed, redundancy, or both**.

| RAID Level | Minimum Drives | Performance | Redundancy | Storage Efficiency |
| ---------- | -------------- | ----------- | ---------- | ------------------ |
| RAID 0     | 2              | High        | None       | 100%               |
| RAID 1     | 2              | Medium      | High       | 50%                |
| RAID 5     | 3              | Medium      | High       | N-1 / N            |
| RAID 6     | 4              | Medium      | Very High  | N-2 / N            |
| RAID 10    | 4              | High        | High       | 50%                |

RAID is a **powerful tool for storage reliability and performance**, but it should **always be paired with backups** for critical data.
