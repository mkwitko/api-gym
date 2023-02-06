-- CreateTable
CREATE TABLE `Exercises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `exerciseId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `target` VARCHAR(191) NOT NULL,
    `bodyPart` VARCHAR(191) NOT NULL,
    `equipment` VARCHAR(191) NOT NULL,
    `gifUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Exercises_exerciseId_key`(`exerciseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
