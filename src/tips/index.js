import React, { useState } from "react";
import { Tab, Tabs, Hotkeys, Hotkey, KeyCombo } from "@blueprintjs/core";
import CommonTips from "./CommonTips";
import OpenRATips from "./OpenRATips";

export default function Tips() {
  const [selected, setSelected] = useState("common");

  const handleTabChange = v => {
    setSelected(v);
  };

  return (
    <Tabs id="TabsExample" onChange={handleTabChange} selectedTabId={selected}>
      <Tab id="common" title="通用" panel={<CommonTips />} />
      <Tab
        id="openra"
        title="OpenRA"
        panel={<OpenRATips />}
        panelClassName="ember-panel"
      />

      <Tabs.Expander />
    </Tabs>
  );
}
