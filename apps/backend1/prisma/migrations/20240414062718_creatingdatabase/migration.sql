-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imagebanner" TEXT,
    "profession" TEXT,
    "description" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "nichetype" TEXT,
    "imageName" TEXT,
    "videoName" TEXT,
    "txtName" TEXT,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saving" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "saving_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articlereadbyuser" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "articlereadbyuser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "summarywatchedbyuser" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "summarywatchedbyuser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSubscription" (
    "id" TEXT NOT NULL,
    "subscribedId" TEXT NOT NULL,
    "subsciberId" TEXT NOT NULL,

    CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liked" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "belongsid" TEXT NOT NULL,

    CONSTRAINT "liked_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_subsciberId_subscribedId_key" ON "UserSubscription"("subsciberId", "subscribedId");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saving" ADD CONSTRAINT "saving_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saving" ADD CONSTRAINT "saving_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articlereadbyuser" ADD CONSTRAINT "articlereadbyuser_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articlereadbyuser" ADD CONSTRAINT "articlereadbyuser_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "summarywatchedbyuser" ADD CONSTRAINT "summarywatchedbyuser_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "summarywatchedbyuser" ADD CONSTRAINT "summarywatchedbyuser_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_subsciberId_fkey" FOREIGN KEY ("subsciberId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_postid_fkey" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liked" ADD CONSTRAINT "liked_belongsid_fkey" FOREIGN KEY ("belongsid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
