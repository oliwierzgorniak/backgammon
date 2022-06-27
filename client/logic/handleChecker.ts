import Colors from "../data/Colors";

type hexToObjType = (hex: number) => { r: number; g: number; b: number };
const hexToObj: hexToObjType = (hex) => {
  // https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
  const hexStr = hex.toString(16);
  let hexArr = [];
  hexArr.push(hexStr.substring(0, 2));
  hexArr.push(hexStr.substring(2, 4));
  hexArr.push(hexStr.substring(4, 6));
  const rgbArr = hexArr.map((e) => parseInt(e, 16));

  return { r: rgbArr[0] / 255, g: rgbArr[1] / 255, b: rgbArr[2] / 255 };
};

type handleCheckerType = (e: any) => void;
const handleChecker: handleCheckerType = (e) => {
  let checker = e.object;

  if (checker.userData.isSelected) {
    const cColor = checker.userData.color;
    checker.material.color = hexToObj(cColor === 0 ? Colors.checker0[0] : Colors.checker1[0]);
    checker.userData.isSelected = false;
  } else {
    checker.userData.isSelected = true;
    checker.material.color = hexToObj(Colors.checkerSelected[0]);
  }
};

export default handleChecker;
