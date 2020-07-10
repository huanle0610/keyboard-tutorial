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
          <th>使用步骤</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <KeyCombo combo="pause" />
          </td>
          <td>暂停/继续</td>
          <td>暂停/继续游戏;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="A" />
          </td>
          <td>-</td>
          <td>进攻型移动, 移动过程中自动进攻;</td>
          <td>先选units, 按下A, 再点击目的地.</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="shift" />
          </td>
          <td>-</td>
          <td>指定行军路线</td>
          <td>先选units, 按住shift, 再在屏幕中选择一个或多个行军路径.</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="shift+a" />
          </td>
          <td>-</td>
          <td>指定行军路线, 并且自动攻击遭遇敌军.</td>
          <td>先选units, 按住shift+a, 再在屏幕中选择一个或多个行军路径.</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="W" />
          </td>
          <td>-</td>
          <td>选择同类;</td>
          <td>先选units, 按下W, 屏幕中的同类都会选中.</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="S" />
          </td>
          <td>-</td>
          <td>停止当前动作;</td>
          <td>先选units, 按下S.</td>
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
