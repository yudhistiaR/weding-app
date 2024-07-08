/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `JadwalAcara` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tugas` VARCHAR(191) NOT NULL,
    `tanggal_mulai` VARCHAR(191) NOT NULL,
    `tanggal_selesai` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `JadwalAcara_id_key` ON `JadwalAcara`(`id`);
