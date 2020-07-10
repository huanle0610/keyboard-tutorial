import { animated, useSpring } from "react-spring";
import React from "react";

export default function SliderUpOut({ text }) {
  const props = useSpring({
    config: { duration: 2000 },
    delay: 200,
    to: [
      {
        opacity: 1,
        color: "white",
        transform: "translate3d(0px,-100px,0)",
        duration: 1500,
      },
      {
        opacity: 0,
      },
    ],
    from: {
      padding: "1px 15px",
      position: "absolute",
      opacity: 0,
      color: "white",
      background: "#2cd2af",
      transform: "translate3d(0,-50px,0)",
    },
  });

  return <animated.div style={props}>{text}</animated.div>;
}
