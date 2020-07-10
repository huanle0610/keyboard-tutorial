import { useEffect } from "react";
import { useKeyboard } from "./context";

const numberMapper = {
  Meta: ["meta", "windows"],
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
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowUp: "up",
  ArrowDown: "down",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
};
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function BindKeys() {
  const { setPlayQueue, setCurrentKey, isPlaying } = useKeyboard();
  useEffect(() => {
    const handler = (e) => {
      if (isPlaying) {
        return;
      }
      e.preventDefault();
      const {
        key,
        code: keyCode,
        location,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
      } = e;
      console.log(
        e,
        `[${key}], [${keyCode}], [${location}], ctrl:[${ctrlKey}], alt:[${altKey}], shift:[${shiftKey}], meta:[${metaKey}]`
      );
      const soundQueueItem =
        (Array.isArray(numberMapper[key])
          ? randomItem(numberMapper[key])
          : numberMapper[key]) || key.toLowerCase();
      setPlayQueue([soundQueueItem]);
      setCurrentKey({
        key,
        keyCode,
        location,
      });
    };
    document.body.addEventListener("keydown", handler);

    return () => {
      document.body.removeEventListener("keydown", handler);
    };
  }, [isPlaying, setCurrentKey, setPlayQueue]);

  return null;
}

export default BindKeys;
