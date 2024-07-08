/*
  Warnings:

  - You are about to drop the column `Status` on the `Progress` table. All the data in the column will be lost.
  - Added the required column `status` to the `Progress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Progress` DROP COLUMN `Status`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
