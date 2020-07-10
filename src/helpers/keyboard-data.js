import { Position } from "@blueprintjs/core";

const KEYBOARD = [
  {
    keyboard_id: 1,
    name: "United States Standard",
    type: "qwerty",
    structure: [
      [
        {
          main: { key: "ESC", code: "Escape" },
          width: "60",
          marginRight: "48px",
          finger: "1",
          tips: "退出游戏或全屏",
        },
        {
          main: { key: "F1", code: "F1" },
          finger: "1",
        },
        {
          main: { key: "F2", code: "F2" },
          finger: "2",
        },
        {
          main: { key: "F3", code: "F3" },
          finger: "3",
        },
        {
          main: { key: "F4", code: "F4" },
          marginRight: "18px",
          finger: "4",
        },
        {
          main: { key: "F5", code: "F5" },
          finger: "4",
        },
        {
          main: { key: "F6", code: "F6" },
          finger: "7",
        },
        {
          main: { key: "F7", code: "F7" },
          finger: "7",
        },
        {
          main: { key: "F8", code: "F8" },
          marginRight: "18px",
          finger: "8",
        },
        {
          main: { key: "F9", code: "F9" },
          finger: "9",
        },
        {
          main: { key: "F10", code: "F10" },
          finger: "9",
        },
        {
          main: { key: "F11", code: "F11" },
          finger: "9",
        },
        {
          main: { key: "F12", code: "F12" },
          finger: "9",
        },
        {
          main: { key: "print", code: "F12" },
          width: "47",

          finger: "9",
        },
        {
          main: { key: "scroll", code: "ScrollLock" },
          width: "47",

          finger: "10",
          toupper: 1,
        },
        {
          main: { key: "pause", code: "Pause" },
          width: "47",
          finger: "10",
          toupper: 1,
        },
      ],
      [
        {
          shifted: { key: "~", code: "Backquote" },
          main: { key: "`", code: "Backquote" },
          finger: "1",
        },
        {
          shifted: { key: "!", code: "Digit1" },
          main: { key: "1", code: "Digit1" },
          finger: "1",
        },
        {
          shifted: { key: "@", code: "Digit2" },
          main: { key: "2", code: "Digit2" },
          finger: "2",
        },
        {
          shifted: { key: "#", code: "Digit3" },
          main: { key: "3", code: "Digit3" },
          finger: "3",
        },
        {
          shifted: { key: "$", code: "Digit4" },
          main: { key: "4", code: "Digit4" },
          finger: "4",
        },
        {
          shifted: { key: "%", code: "Digit5" },
          main: { key: "5", code: "Digit5" },
          finger: "4",
        },
        {
          shifted: { key: "^", code: "Digit6" },
          main: { key: "6", code: "Digit6" },
          finger: "7",
        },
        {
          shifted: { key: "&", code: "Digit7" },
          main: { key: "7", code: "Digit7" },
          finger: "7",
        },
        {
          shifted: { key: "*", code: "Digit8" },
          main: { key: "8", code: "Digit8" },
          finger: "8",
        },
        {
          shifted: { key: "(", code: "Digit9" },
          main: { key: "9", code: "Digit9" },
          finger: "9",
        },
        {
          shifted: { key: ")", code: "Digit0" },
          main: { key: "0", code: "Digit0" },
        },
        {
          shifted: {
            key: "_",
            code: "Minus",
          },
          main: { key: "-", code: "Minus" },
          finger: "10",
        },
        {
          shifted: { key: "+", code: "Equal" },
          main: { key: "=", code: "Equal" },
          finger: "10",
        },
        {
          main: { key: "Back \u21E4", code: "Backspace" },
          width: "74",
          right: 1,
          finger: "10",
          other: 1,
          tips: "删除前面一个字符",
          tipsPosition: Position.RIGHT,
        },
        {
          main: { key: "Ins", code: "Insert" },
          width: "47",
          other: 1,
        },
        {
          main: { key: "home", code: "Home" },
          width: "47",

          other: 1,
        },
        {
          main: { key: "pgup", code: "PageUp" },
          width: "47",
          other: 1,
        },
      ],
      [
        {
          main: { key: "Tab \u21b9", code: "Tab" },
          left: 1,
          width: "68",
          finger: "1",
          other: 1,
        },
        { main: { key: "q", code: "KeyQ" }, finger: "1" },
        {
          main: { key: "w", code: "KeyW" },
          finger: "2",
          toupper: 1,
          pinyin: "打波欧游",
        },
        { main: { key: "e", code: "KeyE" }, finger: "3", toupper: 1 },
        {
          main: { key: "r", code: "KeyR" },
          finger: "4",
          toupper: 1,
          pinyin: "啊儿",
        },
        { main: { key: "t", code: "KeyT" }, finger: "4", toupper: 1 },
        {
          main: { key: "y", code: "KeyY" },
          finger: "7",
          toupper: 1,
        },
        { main: { key: "u", code: "KeyU" }, finger: "7", toupper: 1 },
        {
          main: { key: "i", code: "KeyI" },
          finger: "8",
          toupper: 1,
          pinyin: "爱",
        },
        { main: { key: "o", code: "KeyO" }, finger: "9", toupper: 1 },
        {
          main: { key: "p", code: "KeyP" },
          finger: "10",
          toupper: 1,
        },
        {
          shifted: { key: "{", code: "BracketLeft" },
          main: { key: "[", code: "BracketLeft" },
          finger: "10",
        },
        {
          shifted: { key: "}", code: "BracketRight" },
          main: { key: "]", code: "BracketRight" },
          finger: "10",
        },
        {
          shifted: { key: "|", code: "Backslash" },
          main: { key: "\\", code: "Backslash" },
          width: "55",
          finger: "10",
        },
        {
          main: { key: "del", code: "Delete" },
          width: "47",
          toupper: 1,
        },
        {
          main: { key: "end", code: "End" },
          width: "47",
          toupper: 1,
        },
        {
          main: { key: "pgdn", code: "PageDown" },
          width: "47",
          toupper: 1,
        },
      ],
      [
        {
          main: { key: "Caps 🔒", code: "CapsLock" },
          left: 1,
          width: "83",
          finger: "1",
          other: 1,
        },
        { main: { key: "a", code: "KeyA" }, finger: "1", toupper: 1 },
        {
          main: { key: "s", code: "KeyS" },
          finger: "2",
          toupper: 1,
        },
        { main: { key: "d", code: "KeyD" }, finger: "3", toupper: 1 },
        {
          main: { key: "f", code: "KeyF" },
          finger: "4",
          toupper: 1,
        },
        { main: { key: "g", code: "KeyG" }, finger: "4", toupper: 1 },
        {
          main: { key: "h", code: "KeyH" },
          finger: "7",
          toupper: 1,
          pinyin: "诶吃",
        },
        {
          main: { key: "j", code: "KeyJ" },
          finger: "7",
          toupper: 1,
          pinyin: "这[这个苹果]",
        },
        {
          main: { key: "k", code: "KeyK" },
          finger: "8",
          toupper: 1,
        },
        {
          main: { key: "l", code: "KeyL" },
          finger: "9",
          toupper: 1,
          pinyin: "艾欧",
        },
        {
          shifted: { key: ":", code: "Semicolon" },
          main: { key: ";", code: "Semicolon" },
          finger: "10",
        },
        {
          shifted: { key: '"', code: "Quote" },
          main: { key: "'", code: "Quote" },
          finger: "10",
        },
        {
          main: { key: "Enter \u23ce", code: "Enter" },
          marginRight: "160px",
          width: "98",
          finger: "10",
          right: 1,
          other: 1,
        },
      ],
      [
        {
          main: { key: "Shift \u21e7", code: "ShiftLeft" },
          left: 1,
          width: "120",
          finger: "1",
          other: 1,
        },
        { main: { key: "z", code: "KeyZ" }, finger: "1", toupper: 1 },
        {
          main: { key: "x", code: "KeyX" },
          finger: "2",
          toupper: 1,
        },
        { main: { key: "c", code: "KeyC" }, finger: "3", toupper: 1 },
        {
          main: { key: "v", code: "KeyV" },
          finger: "4",
          toupper: 1,
          pinyin: "唯一",
        },
        { main: { key: "b", code: "KeyB" }, finger: "4", toupper: 1 },
        {
          main: { key: "n", code: "KeyN" },
          finger: "7",
          toupper: 1,
          pinyin: "嗯",
        },
        {
          main: { key: "m", code: "KeyM" },
          finger: "7",
          toupper: 1,
          pinyin: "艾木",
        },
        {
          shifted: { key: "<", code: "Comma" },
          main: { key: ",", code: "Comma" },
          finger: "8",
        },
        {
          shifted: { key: ">", code: "Period" },
          main: { key: ".", code: "Period" },
          finger: "9",
        },
        {
          shifted: { key: "?", code: "Slash" },
          main: { key: "/", code: "Slash" },
          finger: "10",
        },
        {
          main: { key: "\u21e7 Shift", code: "ShiftRight" },
          marginRight: "52px",
          width: "120",
          right: 1,
          finger: "10",
          other: 1,
        },
        {
          main: { key: "\u2191", code: "ArrowUp" },
          marginRight: "52px",
          width: "47",
          toupper: 1,
        },
      ],
      [
        {
          main: { key: "Ctrl", code: "ControlLeft" },
          left: 1,
          width: "60",
          other: 1,
        },
        {
          main: { key: "\u229E", code: "MetaLeft" },
          width: "60",
          other: 1,
        },
        {
          main: {
            key: "Alt",
            code: "AltLeft",
          },
          left: 1,
          width: "60",
          other: 1,
        },
        {
          main: {
            key: "",
            code: "Space",
          },
          left: 1,
          width: "350",
          finger: "6",
          other: 1,
        },
        {
          main: {
            key: "Alt",
            code: "AltRight",
          },
          width: "60",
          right: 1,
          other: 1,
        },
        {
          main: { key: "\u229E", code: "MetaRight" },
          width: "60",
          other: 1,
        },
        {
          main: { key: "\u2630", code: "ContextMenu" },
          width: "60",
          other: 1,
        },
        {
          main: { key: "Ctrl", code: "ControlRight" },
          width: "60",
          right: 1,
          other: 1,
        },
        {
          main: { key: "\u2190", code: "ArrowLeft" },
          width: "47",
          toupper: 1,
        },
        {
          main: { key: "\u2193", code: "ArrowDown" },
          width: "47",
          toupper: 1,
        },
        {
          main: { key: "\u2192", code: "ArrowRight" },
          width: "47",
          toupper: 1,
        },
      ],
    ],
    diffs: [],
    sort_order: 1,
  },
];

export const qwerty = KEYBOARD[0];
const aToZ = Array.from({ length: 26 }, (_, k) => k + 97).reduce(
  (acc, cur) => ({
    ...acc,
    [String.fromCharCode(cur)]: cur,
  }),
  {}
);
export const KeyCodes = {
  space: 32,
  backspace: 8,
  ...aToZ,
};
