// compents
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Checker from "../components/models/Checker";
import DiceSection from "../components/ui/DiceSection";

// data
import Board from "../components/models/Board";
import Colors from "../data/Colors";
import checkers from "../data/schemas/checkers";

// types
import type { NextPage } from "next";

const Game: NextPage = () => {
  return (
    <>
      <DiceSection />
      <Canvas
        camera={{ position: [0, 35, 22] }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 2.7);
          gl.setClearColor(Colors.scene[0]);
        }}
        className="p-0 m-0"
        style={{ height: "100vh" }}
      >
        {/* <OrbitControls /> */}
        <directionalLight color={"#ffffff"} intensity={0.9} />
        <Board />
        {checkers.map((c, i) => (
          <Checker
            x={c.x}
            z={c.z}
            color={c.color}
            index={c.position.index}
            level={c.position.level}
            key={`checker${i}`}
          />
        ))}
        {/* <axesHelper args={[100]} /> */}
      </Canvas>
    </>
  );
};

export default Game;
