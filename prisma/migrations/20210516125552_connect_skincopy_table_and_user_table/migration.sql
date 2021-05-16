/*
  Warnings:

  - The primary key for the `players` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `players` DROP PRIMARY KEY,
    MODIFY `Nick` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`Nick`);

-- AddForeignKey
ALTER TABLE `players` ADD FOREIGN KEY (`Nick`) REFERENCES `authme`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;
