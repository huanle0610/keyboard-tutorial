import React, { useRef } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import Keyboard from "./Keyboard";
import BindKeys from "./bindkeys";
import Player from "./player";
import { KeyboardProvider, useKeyboard } from "./context";
import { Switch, Slider, Label } from "@blueprintjs/core";
import ErrorBoundary from "./ErrorBoundry";
import Tips from "./tips";
import styled from "styled-components";
import { FullscreenManager } from "./fullscreen";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledSlider = styled(Slider)`
  width: 500px;
`;

const StyledLabel = styled(Label)`
  display: flex !important;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

function SwitchTools() {
  const {
    lowerCase,
    toggleLowerCase,
    showImg,
    toggleImg,
    zoom,
    setZoom,
  } = useKeyboard();
  const fullscreenRef = useRef();

  return (
    <Toolbar>
      <Switch
        checked={lowerCase}
        label="切换大小写"
        onChange={toggleLowerCase}
      />
      <Switch checked={showImg} label="显示实物键盘" onChange={toggleImg} />

      <StyledLabel>
        <div style={{ width: "70px" }}>缩放比例 </div>
        <StyledSlider
          min={1}
          max={2}
          stepSize={0.1}
          labelStepSize={0.2}
          onChange={(num) => setZoom(num)}
          labelRenderer
          showTrackFill
          value={zoom}
        />
      </StyledLabel>
      <FullscreenManager ref={fullscreenRef} />
    </Toolbar>
  );
}

function App() {
  const { showImg } = useKeyboard();

  return (
    <StyledApp className="bp3-dark">
      <Player />
      <BindKeys />
      <Keyboard />
      <SwitchTools />
      <Tips />
      <center>
        {showImg && <img src="media/keyboard.jpg" alt="实物键盘" />}
      </center>
    </StyledApp>
  );
}

const WrappedApp = () => (
  <KeyboardProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </KeyboardProvider>
);
export default WrappedApp;
