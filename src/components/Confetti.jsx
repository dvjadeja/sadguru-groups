import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const ConfettieComponent = () => {
  const { width, height } = useWindowSize;

  return <Confetti width={width} height={height} numberOfPieces={150} gravity={0.01} />;
};

export default ConfettieComponent;
