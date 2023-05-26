import styled from "styled-components";

export const NavFilterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 80px;
  background-color: #fff;
  z-index: 999;
  height: 48px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  display: flex;
  align-items: center;

  .key-list {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 10px;

    .key-item {
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      border-radius: 3px;
      border: 1px solid #eee;
      margin: 0 7px;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: #008489;
      }
    }
  }
`;
