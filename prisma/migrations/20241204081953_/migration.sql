/*
  Warnings:

  - Added the required column `like` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "like" INTEGER NOT NULL,
ADD COLUMN     "user" TEXT NOT NULL;
