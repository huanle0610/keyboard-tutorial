import React, { useState } from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import CommonTips from "./CommonTips";

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
        panel={<div>abc</div>}
        panelClassName="ember-panel"
      />

      <Tabs.Expander />
    </Tabs>
  );
}
