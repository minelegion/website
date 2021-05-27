-- CreateTable
CREATE TABLE `authme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `realname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `ip` VARCHAR(191),
    `lastlogin` BIGINT,
    `x` DOUBLE NOT NULL DEFAULT 0,
    `y` DOUBLE NOT NULL DEFAULT 0,
    `z` DOUBLE NOT NULL DEFAULT 0,
    `world` VARCHAR(191) NOT NULL DEFAULT 'world',
    `regdate` BIGINT NOT NULL DEFAULT 0,
    `regip` VARCHAR(191),
    `yaw` DOUBLE,
    `pitch` DOUBLE,
    `email` VARCHAR(191),
    `isLogged` INTEGER NOT NULL DEFAULT 0,
    `hasSession` INTEGER NOT NULL DEFAULT 0,
    `totp` VARCHAR(191),

    UNIQUE INDEX `authme.username_unique`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discord_users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `discord_users_userId_unique`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players` (
    `Nick` VARCHAR(191) NOT NULL,
    `Skin` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Nick`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skins` (
    `Nick` VARCHAR(191) NOT NULL,
    `Value` VARCHAR(191),
    `Signature` VARCHAR(191),
    `timestamp` VARCHAR(191),

    PRIMARY KEY (`Nick`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_actions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` BIGINT NOT NULL,
    `actor_uuid` VARCHAR(191) NOT NULL,
    `actor_name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `acted_uuid` VARCHAR(191) NOT NULL,
    `acted_name` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_group_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `permission` VARCHAR(191) NOT NULL,
    `value` BOOLEAN NOT NULL,
    `server` VARCHAR(191) NOT NULL,
    `world` VARCHAR(191) NOT NULL,
    `expiry` BIGINT NOT NULL,
    `contexts` VARCHAR(191) NOT NULL,

    INDEX `luckperms_group_permissions_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_groups` (
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_messenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `msg` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_players` (
    `uuid` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `primary_group` VARCHAR(191) NOT NULL,

    INDEX `luckperms_players_username`(`username`),
    UNIQUE INDEX `luckperms_players_username_unique`(`username`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_tracks` (
    `name` VARCHAR(191) NOT NULL,
    `groups` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_user_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `permission` VARCHAR(191) NOT NULL,
    `value` BOOLEAN NOT NULL,
    `server` VARCHAR(191) NOT NULL,
    `world` VARCHAR(191) NOT NULL,
    `expiry` BIGINT NOT NULL,
    `contexts` VARCHAR(191) NOT NULL,

    INDEX `luckperms_user_permissions_uuid`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `discord_users` ADD FOREIGN KEY (`userId`) REFERENCES `authme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `players` ADD FOREIGN KEY (`Nick`) REFERENCES `authme`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skins` ADD FOREIGN KEY (`Nick`) REFERENCES `authme`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `luckperms_group_permissions` ADD FOREIGN KEY (`name`) REFERENCES `luckperms_groups`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `luckperms_players` ADD FOREIGN KEY (`username`) REFERENCES `authme`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `luckperms_user_permissions` ADD FOREIGN KEY (`uuid`) REFERENCES `luckperms_players`(`uuid`) ON DELETE CASCADE ON UPDATE CASCADE;
