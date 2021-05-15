/*
  Warnings:

  - The primary key for the `authme` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `authme` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedMediumInt`.
  - You are about to alter the column `ip` on the `authme` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `regip` on the `authme` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `isLogged` on the `authme` table. The data in that column could be lost. The data in that column will be cast from `Int` to `SmallInt`.
  - You are about to alter the column `hasSession` on the `authme` table. The data in that column could be lost. The data in that column will be cast from `Int` to `SmallInt`.
  - You are about to alter the column `totp` on the `authme` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(32)`.

*/
-- AlterTable
ALTER TABLE `authme` DROP PRIMARY KEY,
    MODIFY `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `username` VARCHAR(255) NOT NULL,
    MODIFY `realname` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `ip` VARCHAR(40),
    MODIFY `world` VARCHAR(255) NOT NULL DEFAULT 'world',
    MODIFY `regip` VARCHAR(40),
    MODIFY `yaw` FLOAT,
    MODIFY `pitch` FLOAT,
    MODIFY `email` VARCHAR(255),
    MODIFY `isLogged` SMALLINT NOT NULL DEFAULT 0,
    MODIFY `hasSession` SMALLINT NOT NULL DEFAULT 0,
    MODIFY `totp` VARCHAR(32),
    ADD PRIMARY KEY (`id`);
