type Game = { id: number; players: [number, number] };
type positionFrom = { area: "board" | "bar"; x: number; y: number };
type positionTo = { area: "board" | "bar" | "out"; x: number; y: number };
type Move = { id: number; from: positionFrom; to: positionTo };
type CheckersPositions = { board: number[][]; bar: number[][] };
