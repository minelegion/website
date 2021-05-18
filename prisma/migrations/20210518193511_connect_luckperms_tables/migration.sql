-- CreateTable
CREATE TABLE `luckperms_actions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` BIGINT NOT NULL,
    `actor_uuid` VARCHAR(36) NOT NULL,
    `actor_name` VARCHAR(100) NOT NULL,
    `type` CHAR(1) NOT NULL,
    `acted_uuid` VARCHAR(36) NOT NULL,
    `acted_name` VARCHAR(36) NOT NULL,
    `action` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_group_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(36) NOT NULL,
    `permission` VARCHAR(200) NOT NULL,
    `value` BOOLEAN NOT NULL,
    `server` VARCHAR(36) NOT NULL,
    `world` VARCHAR(64) NOT NULL,
    `expiry` BIGINT NOT NULL,
    `contexts` VARCHAR(200) NOT NULL,

    INDEX `luckperms_group_permissions_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_groups` (
    `name` VARCHAR(36) NOT NULL,

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
    `uuid` VARCHAR(36) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `primary_group` VARCHAR(36) NOT NULL,

    INDEX `luckperms_players_username`(`username`),
    UNIQUE INDEX `luckperms_players_username_unique`(`username`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_tracks` (
    `name` VARCHAR(36) NOT NULL,
    `groups` TEXT NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `luckperms_user_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(36) NOT NULL,
    `permission` VARCHAR(200) NOT NULL,
    `value` BOOLEAN NOT NULL,
    `server` VARCHAR(36) NOT NULL,
    `world` VARCHAR(64) NOT NULL,
    `expiry` BIGINT NOT NULL,
    `contexts` VARCHAR(200) NOT NULL,

    INDEX `luckperms_user_permissions_uuid`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `luckperms_players` ADD FOREIGN KEY (`username`) REFERENCES `authme`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `luckperms_user_permissions` ADD FOREIGN KEY (`uuid`) REFERENCES `luckperms_players`(`uuid`) ON DELETE CASCADE ON UPDATE CASCADE;
