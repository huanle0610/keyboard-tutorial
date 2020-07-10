import React, { useReducer, forwardRef } from "react";
import FullScreen, { fullScreenSupported } from "react-request-fullscreen";
import { IconNames } from "@blueprintjs/icons";
import { Icon, Tooltip, Position } from "@blueprintjs/core";

export const FullscreenManager = forwardRef((_, ref) => {
  const [isFullScreen, toggleFullscreen] = useReducer((v) => !v, false);

  const requestOrExitFullScreen = () => {
    ref.current.fullScreen();
  };

  const message = isFullScreen ? "退出全屏" : "进入全屏";
  return (
    <FullScreen ref={ref} onFullScreenChange={toggleFullscreen}>
      <Tooltip content={message} position={Position.BOTTOM}>
        <Icon
          disabled={!fullScreenSupported}
          style={{ cursor: "pointer" }}
          icon={isFullScreen ? IconNames.MINIMIZE : IconNames.FULLSCREEN}
          onClick={requestOrExitFullScreen}
        />
      </Tooltip>
    </FullScreen>
  );
});
