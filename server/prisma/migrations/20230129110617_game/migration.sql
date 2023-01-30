-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL,
    "player0" INTEGER NOT NULL,
    "player1" INTEGER NOT NULL,
    "player0score" INTEGER NOT NULL,
    "player1score" INTEGER NOT NULL,
    "winner" INTEGER NOT NULL,
    "playedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
