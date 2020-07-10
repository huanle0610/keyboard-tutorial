import React, { useReducer } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import Keyboard from "./Keyboard";
import BindKeys from "./bindkeys";
import Player from "./player";
import { KeyboardProvider, useKeyboard } from "./context";
import { Switch, Slider } from "@blueprintjs/core";
import ErrorBoundary from "./ErrorBoundry";
import Tips from "./tips";

function SwitchTools() {
  const {
    lowerCase,
    toggleLowerCase,
    showImg,
    toggleImg,
    zoom,
    setZoom
  } = useKeyboard();
  return (
    <>
      <Switch
        checked={lowerCase}
        label="切换大小写"
        onChange={toggleLowerCase}
      />
      <Switch checked={showImg} label="显示实物键盘" onChange={toggleImg} />

      <Slider
        min={1}
        max={2}
        stepSize={0.1}
        labelStepSize={0.2}
        onChange={num => setZoom(num)}
        labelRenderer
        showTrackFill
        value={zoom}
      />
    </>
  );
}

function App() {
  const { showImg } = useKeyboard();

  return (
    <div className="bp3-dark">
      <Player />
      <BindKeys />
      <Keyboard />
      <SwitchTools />
      {/* <Tips /> */}
      <center>{showImg && <img src="media/keyboard.jpg" />}</center>
    </div>
  );
}

const WrapperedApp = () => (
  <KeyboardProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </KeyboardProvider>
);
export default WrapperedApp;
