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
            <KeyCombo combo="enter" />
          </td>
          <td>回车</td>
          <td>确定操作, 输入文本时换行</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="ctrl" />
          </td>
          <td>-</td>
          <td>多选(不连续)</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="shift" />
          </td>
          <td>-</td>
          <td>多选(连续)</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="backspace" />
          </td>
          <td>退格键</td>
          <td>删除打错的字符</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="⊞+d" />
          </td>
          <td>-</td>
          <td>显示桌面</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="ESC" />
          </td>
          <td>-</td>
          <td>退出游戏或全屏</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="F11" />
          </td>
          <td>-</td>
          <td>全屏</td>
        </tr>
        <tr>
          <td>
            <KeyCombo combo="F5" />
          </td>
          <td>-</td>
          <td>刷新</td>
        </tr>
      </tbody>
    </table>
  );
}
