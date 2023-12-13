/*
  Warnings:

  - Added the required column `belongsiduser` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comment" ADD COLUMN     "belongsiduser" TEXT NOT NULL,
ADD COLUMN     "content" TEXT;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_belongsiduser_fkey" FOREIGN KEY ("belongsiduser") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
