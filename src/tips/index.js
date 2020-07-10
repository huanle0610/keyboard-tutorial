import React from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import CommonTips from "./CommonTips";
import OpenRATips from "./OpenRATips";
import styled from "styled-components";
import useStickyState from "../hooks/useStickyState";

const StyledTabs = styled(Tabs)`
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default function Tips() {
  const [selected, setSelected] = useStickyState("common", "defaultTipsType");

  const handleTabChange = (v) => {
    setSelected(v);
  };

  return (
    <StyledTabs onChange={handleTabChange} selectedTabId={selected}>
      <Tab
        id="common"
        title="通用"
        panel={<CommonTips />}
        className={"overAutoTab"}
      />
      <Tab
        id="openra"
        title="OpenRA"
        panel={<OpenRATips />}
        className={"overAutoTab"}
      />

      <Tabs.Expander />
    </StyledTabs>
  );
}
