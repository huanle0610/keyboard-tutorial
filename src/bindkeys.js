import React, { useEffect } from "react";
import { useKeyboard } from "./context";

const numberMapper = {
  Meta: "windows",
  " ": "space",
  "=": "equal",
  "-": "minus",
  "[": "bracket",
  "]": "bracket",
  ";": "semicolon",
  "/": "slash",
  "\\": "backslash",
  "'": "quote",
  "`": "backquote",
  ",": "comma",
  ".": "period",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero"
};

function BindKeys() {
  const { setPlayQueue, setCurrentKey } = useKeyboard();
  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      const { key, code: keyCode, location } = e;
      console.log(`[${key}], [${keyCode}], [${location}]`);
      const soundQueueItem = numberMapper[key] || key.toLowerCase();
      setPlayQueue([soundQueueItem]);
      setCurrentKey({
        key,
        keyCode,
        location
      });
    };
    document.body.addEventListener("keydown", handler);

    return () => {
      document.body.removeEventListener("keydown", handler);
    };
  }, []);

  return <></>;
}
export default BindKeys;
