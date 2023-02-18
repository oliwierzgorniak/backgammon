type Game = { id: number; players: [number, number] };
type position = { area: string; x: number; y: number };
type Move = { id: number; from: position; to: position };
type CheckersPositions = { board: number[][]; bar: number[][] };
