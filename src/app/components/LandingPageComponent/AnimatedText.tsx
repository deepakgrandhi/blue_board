"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const colors = ["#ff0000", "#402E7A", "#4C3BCF", "#4B70F5", "#3DC2EC"];

const AnimatedSpan = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);

  useEffect(() => {
    let index = 0;
    const colorInterval = setInterval(() => {
      index = (index + 1) % colors.length;
      setCurrentColor(colors[index]);
    }, 500);

    return () => clearInterval(colorInterval);
  }, []);

  return <AnimatedSpan color={currentColor}>{text}</AnimatedSpan>;
};

export default AnimatedText;
