-- AddForeignKey
ALTER TABLE `luckperms_group_permissions` ADD FOREIGN KEY (`name`) REFERENCES `luckperms_groups`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
