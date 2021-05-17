-- DropForeignKey
ALTER TABLE `authme` DROP FOREIGN KEY `authme_ibfk_1`;

-- AddForeignKey
ALTER TABLE `skins` ADD FOREIGN KEY (`Nick`) REFERENCES `authme`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;
