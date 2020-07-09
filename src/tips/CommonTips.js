import React from "react";

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
          <td>Enter</td>
          <td>回车</td>
          <td>确定操作, 输入文本时换行</td>
        </tr>
        <tr>
          <td>Ctrl</td>
          <td>-</td>
          <td>多选(不连续)</td>
        </tr>
        <tr>
          <td>Back Space</td>
          <td>退格键</td>
          <td>删除打错的字符</td>
        </tr>
        <tr>
          <td>ESC</td>
          <td>-</td>
          <td>退出游戏或全屏</td>
        </tr>
        <tr>
          <td>Alt</td>
          <td>-</td>
          <td>退出游戏或全屏</td>
        </tr>
        <tr>
          <td>Shift</td>
          <td>-</td>
          <td>多选(连续)</td>
        </tr>
      </tbody>
    </table>
  );
}
