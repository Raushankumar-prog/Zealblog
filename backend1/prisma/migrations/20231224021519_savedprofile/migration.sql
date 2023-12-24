-- CreateTable
CREATE TABLE "saved" (
    "id" TEXT NOT NULL,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "saved_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "saved" ADD CONSTRAINT "saved_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
