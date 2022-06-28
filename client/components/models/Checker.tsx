import { useEffect, useRef, Component, ReactNode } from "react";
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

// class Checker extends Component {
//   componentDidMount() {
//     Logic.checkers[this.props.index].push(this.ref.current);
//   }

//   render(): ReactNode {
//     this.ref = useRef(null);

//     return (
//       <mesh
//         ref={this.ref}
//         position={[x, 0, z]}
//         userData={{ index: index, level: level, color: color }}
//         onClick={handleChecker}
//       >
//         <cylinderGeometry args={[BoardData.checkerR, BoardData.checkerR, BoardData.checkerHeight, 25]} />
//         <meshToonMaterial color={color === 0 ? Colors.checker0[0] : Colors.checker1[0]} />
//       </mesh>
//     );
//   }
// }

const Checker = ({ x, z, color, index, level }: Props) => {
  let mesh = useRef(null);

  useEffect(() => {
    Logic.checkers[index][level] = mesh.current;
  }, []);

  return (
    <mesh
      ref={mesh}
      position={[x, 0, z]}
      userData={{ index: index, level: level, color: color }}
      onClick={handleChecker}
    >
      <cylinderGeometry args={[BoardData.checkerR, BoardData.checkerR, BoardData.checkerHeight, 25]} />
      <meshToonMaterial color={color === 0 ? Colors.checker0[0] : Colors.checker1[0]} />
    </mesh>
  );
};

export default Checker;
