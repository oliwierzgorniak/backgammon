import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

// data
import BoardData from "../../data/Board";
import Colors from "../../data/Colors";
import Logic from "../../data/Logic";

import handleChecker from "../../logic/handleChecker";

interface Props {
  x: number;
  z: number;
  color: number;
  index: number;
  level: number;
}

const Checker = ({ x, z, color, index, level }: Props) => {
  let mesh = useRef(null);

  useEffect(() => {
    Logic.checkers[index][level] = mesh.current;
  }, []);

  let [p, setP] = useState([x, 0, z]);
  let { position } = useSpring({ position: p });

  let [checkerIndex, setCheckerIndex] = useState(index);
  let [checkerLevel, setCheckerLevel] = useState(level);

  let [checkerBarSection, setCheckerBarSection] = useState(undefined);
  let [checkerBarLevel, setCheckerBarLevel] = useState(undefined);

  let [isInFinalZone, setIsInFinalZone] = useState(false);

  return (
    <animated.mesh
      ref={mesh}
      position={position}
      userData={{
        index: checkerIndex,
        level: checkerLevel,
        color: color,
        setPosition: setP,
        setIndex: setCheckerIndex,
        setLevel: setCheckerLevel,
        barSection: checkerBarSection,
        barLevel: checkerBarLevel,
        setBarSection: setCheckerBarSection,
        setBarLevel: setCheckerBarLevel,
        isInFinalZone: isInFinalZone,
        setIsInFinalZone: setIsInFinalZone,
      }}
      onClick={handleChecker}
    >
      <cylinderGeometry args={[BoardData.checkerR, BoardData.checkerR, BoardData.checkerHeight, 25]} />
      <meshToonMaterial color={color === 0 ? Colors.checker0[0] : Colors.checker1[0]} />
    </animated.mesh>
  );
};

export default Checker;
