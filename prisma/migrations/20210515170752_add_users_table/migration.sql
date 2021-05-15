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
