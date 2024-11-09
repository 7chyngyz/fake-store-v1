/*
  Warnings:

  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `price` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "color",
DROP COLUMN "description",
DROP COLUMN "size",
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;
