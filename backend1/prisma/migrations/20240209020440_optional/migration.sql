-- DropForeignKey
ALTER TABLE "liked" DROP CONSTRAINT "liked_belongslikeid_fkey";

-- AlterTable
ALTER TABLE "liked" ALTER COLUMN "belongslikeid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_belongslikeid_fkey" FOREIGN KEY ("belongslikeid") REFERENCES "saving"("id") ON DELETE SET NULL ON UPDATE CASCADE;
