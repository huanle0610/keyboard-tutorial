import React, { useRef, useEffect, useState, useCallback } from "react";
import { useKeyboard } from "./context";

export default function Player(props) {
  const { playQueue: queue, setIsPlaying } = useKeyboard();

  const ref = useRef();
  const playRef = useRef();
  const lastPlay = useRef();
  // const [playing, togglePlaying] = useReducer(v => !v, false);
  const [, setPrev] = useState("");
  const [index, setIndex] = useState(0);

  const playSound = useCallback(
    (phonics) => {
      ref.current.src = `./keys/${phonics}.mp3`;
      setIsPlaying(true);
      return ref.current.play().catch((e) => {
        setIsPlaying(false);
        console.log(
          e,
          e.message.includes("Failed to load")
            ? `failed to load ${ref.current.src}`
            : ""
        );
      });
    },
    [setIsPlaying]
  );

  const onError = useCallback((_) => {
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
      setIsPlaying(false);
      playRef.current();
    }
    ref.current.addEventListener("ended", getRefValue);
  }, [setIsPlaying]);

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
        lastPlay.current.then((_) => {
          ref.current.pause();
          doPlay();
        });
      }
    } else {
      doPlay();
    }
  }, [playSound, queue]);

  return (
    <>
      <audio ref={ref} onError={onError} />
    </>
  );
}
