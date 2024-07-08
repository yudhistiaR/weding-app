-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TamuUndangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_tamu` VARCHAR(191) NOT NULL,
    `nomor_meja` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JadwalAcara` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pasangan` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `tempat` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BudgetPernikahan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pasangan` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `venue` VARCHAR(191) NOT NULL,
    `catering` VARCHAR(191) NOT NULL,
    `pakaian` VARCHAR(191) NOT NULL,
    `dekorasi` VARCHAR(191) NOT NULL,
    `fotografi` VARCHAR(191) NOT NULL,
    `undangan` VARCHAR(191) NOT NULL,
    `musik_hiburan` VARCHAR(191) NOT NULL,
    `transport` VARCHAR(191) NOT NULL,
    `lainnya` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_vendor` VARCHAR(191) NOT NULL,
    `nama_vendor` VARCHAR(191) NOT NULL,
    `kontak` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Keuangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategori` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `pendapatan` VARCHAR(191) NOT NULL,
    `pengeluaran` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RekapitulasiResepsi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategori` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `jumlah` VARCHAR(191) NOT NULL,
    `total` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fotografi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategori` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
