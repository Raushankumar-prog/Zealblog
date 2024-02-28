-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_belongsid_fkey";

-- DropForeignKey
ALTER TABLE "liked" DROP CONSTRAINT "liked_belongsid_fkey";

-- DropForeignKey
ALTER TABLE "liked" DROP CONSTRAINT "liked_postid_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_belongsid_fkey";

-- DropForeignKey
ALTER TABLE "saving" DROP CONSTRAINT "saving_belongsid_fkey";

-- DropForeignKey
ALTER TABLE "saving" DROP CONSTRAINT "saving_postid_fkey";

-- DropForeignKey
ALTER TABLE "subscribe" DROP CONSTRAINT "subscribe_belongsid_fkey";

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saving" ADD CONSTRAINT "saving_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saving" ADD CONSTRAINT "saving_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscribe" ADD CONSTRAINT "subscribe_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
