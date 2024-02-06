-- CreateTable
CREATE TABLE "liked" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "liked_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
