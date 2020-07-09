import React from "react";
import { qwerty } from "./helpers/keyboard-data";
import styled, { ThemeProvider } from "styled-components";
import { useKeyboard } from "./context";
import { Position, Tooltip } from "@blueprintjs/core";

const StyledKeyboardWrapper = styled.div`
  padding: 10px 10px 5px;
  display: flex;
  justify-content: center;
`;

const StyledKeyboard = styled.div`
  border-radius: 5px;
  background: ${props => props.theme.mainBg};
  width: 770px;
  padding: 5px;
  zoom: ${props => props.zoom};
`;

const StyledKeyRow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 5px;
  max-height: 50px;
`;

const StyledKey = styled.div`
  white-space: nowrap;
  width: ${props => (props.width ? `${props.width}px` : "50px")};
  text-align: ${props => props.textAlign};
  height: 40px;
  line-height: 40px;
  background: #f6f7f8;
  border-bottom: 1px solid #dbdbdc;
  border-top: 1px solid white;
  border-radius: 4px;
  box-shadow: 0 1px 3px #67696e, inset 0 0 5px white;
  color: #4a4a4a;
  font-family: varela round, Helvetica Neue, Helvetica, Arial;
  font-size: 14px;
  padding: 0 6px;
  cursor: not-allowed;
  & + & {
    margin-left: 8px;
  }
  &.active {
    background-color: #50abe3;
    border-bottom-color: #4998c9;
    border-top-color: #349fec;
    box-shadow: 0 1px 3px rgba(15, 42, 60, 0.8), inset 0 0 3px #6bbaf0;
    color: white;
    text-shadow: 0 1px 0 #205f8c;
  }
  &:hover {
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, text-shadow 0.2s,
      color 0.2s;
    background-color: #a6d6f3;
    border-bottom-color: #8bc0e1;
    border-top-color: #88c4ef;
    box-shadow: 0 1px 3px rgba(15, 42, 60, 0.4), inset 0 0 3px #a9d6f5;
    text-shadow: 0 1px 0 #4b8bb9;
    color: #fff;
  }
`;

const isAlphabet = str =>
  str.length === 1 && "abcdefghijklmnopqrstuvwxyz".includes(str);

function Key(props) {
  const { currentKey, lowerCase } = useKeyboard();
  const { main, width, left, right } = props.keyData;

  const currentLocation =
    currentKey.location === 1
      ? "left"
      : currentKey.location === 2
      ? "right"
      : "";
  const textAlign = left ? "left" : right ? "right" : "center";
  const active = main.code === currentKey.keyCode;
  const showedKey =
    isAlphabet(main.key) && !lowerCase ? main.key.toUpperCase() : main.key;
  return (
    <StyledKey
      className={active ? "active" : ""}
      width={width}
      textAlign={textAlign}
    >
      {showedKey}
    </StyledKey>
  );
}

function KeyRow(props) {
  return (
    <StyledKeyRow>
      {props.row.map((v, index) => (
        <Key key={index} keyData={v} />
      ))}
    </StyledKeyRow>
  );
}

export default function Keyboard() {
  const theme = {
    mainBg: "#333"
  };
  const { zoom } = useKeyboard();

  return (
    <ThemeProvider theme={theme}>
      <StyledKeyboardWrapper>
        <StyledKeyboard zoom={zoom}>
          {qwerty.structure.map((v, index) => (
            <KeyRow key={index} row={v} />
          ))}
        </StyledKeyboard>
      </StyledKeyboardWrapper>
    </ThemeProvider>
  );
}
