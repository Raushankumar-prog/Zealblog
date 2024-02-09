/*
  Warnings:

  - You are about to drop the column `belongslikeid` on the `liked` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "liked" DROP CONSTRAINT "liked_belongslikeid_fkey";

-- AlterTable
ALTER TABLE "liked" DROP COLUMN "belongslikeid";
