-- DropIndex
DROP INDEX `luckperms_players_username_unique` ON `luckperms_players`;

-- AlterTable
ALTER TABLE `discord_users` MODIFY `avatar` VARCHAR(191);
