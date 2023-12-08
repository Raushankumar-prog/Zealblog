/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `nichetype` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `commentpercentage` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `earningfrom` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `likepercentage` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `timespent` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `author` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
DROP COLUMN "nichetype",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "commentpercentage",
DROP COLUMN "earningfrom",
DROP COLUMN "likepercentage",
DROP COLUMN "location",
DROP COLUMN "timespent";

-- DropTable
DROP TABLE "author";
