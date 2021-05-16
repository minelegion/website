-- CreateTable
CREATE TABLE `players` (
    `Nick` VARCHAR(16) NOT NULL,
    `Skin` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`Nick`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skins` (
    `Nick` VARCHAR(255) NOT NULL,
    `Value` TEXT,
    `Signature` TEXT,
    `timestamp` TEXT,

    PRIMARY KEY (`Nick`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `authme` ADD FOREIGN KEY (`username`) REFERENCES `skins`(`Nick`) ON DELETE CASCADE ON UPDATE CASCADE;
