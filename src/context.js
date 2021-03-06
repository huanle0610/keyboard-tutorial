import React, { createContext, useContext, useReducer, useState } from "react";
import useStickyState from "./hooks/useStickyState";

export const KeyboardContext = createContext(false);
export const useKeyboard = () => useContext(KeyboardContext);

export const KeyboardProvider = ({ children }) => {
  const [playQueue, setPlayQueue] = useState([]);
  const [zoom, setZoom] = useStickyState(1.6, "zoom");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showImg, toggleImg] = useReducer((v) => !v, false);
  const [currentKey, setCurrentKey] = useState({
    key: null,
    keyCode: null,
    location: null,
  });
  const [lowerCase, toggleLowerCase] = useReducer((v) => !v, false);

  return (
    <KeyboardContext.Provider
      value={{
        currentKey,
        setCurrentKey,
        lowerCase,
        toggleLowerCase,
        playQueue,
        setPlayQueue,
        showImg,
        toggleImg,
        zoom,
        setZoom,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
