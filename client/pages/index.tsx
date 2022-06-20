import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Box from "../components/Box";
// import Box from "../components/Box";

const Game: NextPage = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2] }} style={{ height: "100vh" }}>
      <Box />
    </Canvas>
  );
};

export default Game;
