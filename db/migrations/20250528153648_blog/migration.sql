/*
  Warnings:

  - You are about to drop the column `rating` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `ratingCount` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `img` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "rating",
DROP COLUMN "ratingCount",
ADD COLUMN     "img" TEXT NOT NULL;
