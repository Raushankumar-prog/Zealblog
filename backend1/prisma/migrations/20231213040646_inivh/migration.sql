/*
  Warnings:

  - You are about to drop the column `location` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE post_like_seq;
CREATE SEQUENCE post_dislike_seq;
ALTER TABLE "post" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "like" SET DEFAULT nextval('post_like_seq'),
ALTER COLUMN "dislike" SET DEFAULT nextval('post_dislike_seq');
ALTER SEQUENCE post_like_seq OWNED BY "post"."like";
ALTER SEQUENCE post_dislike_seq OWNED BY "post"."dislike";

-- AlterTable
CREATE SEQUENCE user_like_seq;
CREATE SEQUENCE user_dislike_seq;
ALTER TABLE "user" DROP COLUMN "location",
ALTER COLUMN "like" SET DEFAULT nextval('user_like_seq'),
ALTER COLUMN "dislike" SET DEFAULT nextval('user_dislike_seq');
ALTER SEQUENCE user_like_seq OWNED BY "user"."like";
ALTER SEQUENCE user_dislike_seq OWNED BY "user"."dislike";
