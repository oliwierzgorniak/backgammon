/*
  Warnings:

  - You are about to drop the column `playedAt` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE game_id_seq;
ALTER TABLE "Game" DROP COLUMN "playedAt",
ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" SET DEFAULT nextval('game_id_seq'),
ALTER COLUMN "player0score" SET DEFAULT 0,
ALTER COLUMN "player1score" SET DEFAULT 0;
ALTER SEQUENCE game_id_seq OWNED BY "Game"."id";
