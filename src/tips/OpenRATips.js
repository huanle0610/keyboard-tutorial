import React from "react";
import { KeyCombo } from "@blueprintjs/core";

export default function CommonTips() {
  return (
    <table className="bp3-html-table">
      <thead>
        <tr>
          <th>按键</th>
          <th>中文</th>
          <th>作用</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <KeyCombo combo="A" />
          </td>
          <td>-</td>
          <td>进攻型移动, 移动过程中自动进攻</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="shift" />
          </td>
          <td>-</td>
          <td>指定运动路线</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="ctrl+x" />
          </td>
          <td>-</td>
          <td>散开</td>
        </tr>
      </tbody>
    </table>
  );
}
