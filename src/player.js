import React, { useRef, useEffect, useState, useCallback } from "react";
import { useKeyboard } from "./context";

export default function Player(props) {
  const { playQueue: queue } = useKeyboard();

  const ref = useRef();
  const playRef = useRef();
  const lastPlay = useRef();
  // const [playing, togglePlaying] = useReducer(v => !v, false);
  const [prev, setPrev] = useState("");
  const [index, setIndex] = useState(0);

  const playSound = phonics => {
    ref.current.src = `./keys/${phonics}.mp3`;
    return ref.current.play().catch(e => {
      console.log(e, `failed to load ${ref.current.src}`);
    });
  };

  const onError = useCallback(_ => {
    console.log("load failed");
  }, []);

  useEffect(() => {
    playRef.current = () => {
      if (index + 1 < queue.length) {
        setIndex(index + 1);
        playSound(queue[index + 1]);

        setPrev(queue[index + 1]);
      }
    };
  });

  useEffect(() => {
    function getRefValue() {
      playRef.current();
    }
    ref.current.addEventListener("ended", getRefValue);
  }, []);

  useEffect(() => {
    const doPlay = () => {
      if (queue.length > 0) {
        setPrev(queue[0]);
        lastPlay.current = playSound(queue[0]);
      }
    };
    console.log(queue, "player");
    if (!queue) {
      return;
    }
    setIndex(0);
    if (!ref.current.paused) {
      if (lastPlay.current !== undefined) {
        lastPlay.current.then(_ => {
          ref.current.pause();
          doPlay();
        });
      }
    } else {
      doPlay();
    }
  }, [queue]);

  return (
    <>
      <audio ref={ref} onError={onError} />
    </>
  );
}
