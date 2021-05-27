/*
  Warnings:

  - You are about to drop the column `discord` on the `authme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `authme` DROP COLUMN `discord`;

-- CreateTable
CREATE TABLE `discord_users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `userId` MEDIUMINT UNSIGNED NOT NULL,

    UNIQUE INDEX `discord_users_userId_unique`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `discord_users` ADD FOREIGN KEY (`userId`) REFERENCES `authme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
