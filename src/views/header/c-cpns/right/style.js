import styled from "styled-components";

export const HomeRightWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .login {
    display: flex;
    line-height: 42px;
    height: 42px;

    .item {
      padding: 0 13px;
      cursor: pointer;

      &:hover {
        background-color: #eee;
        border-radius: 40px;
      }
    }

    .international {
      color: ${(props) => props.theme.color.secondaryColor};
      display: flex;
      align-items: center;
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    padding: 5px 5px 5px 10px;
    border-radius: 20px;
    transition: all 0.6s ease;

    &:hover {
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .item {
      color: #717171;
      display: flex;
      align-items: center;
      margin: 0 3px;
    }
  }

  .list {
    position: absolute;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 15px;
    background-color: #fff;

    padding: 2px 0;
    right: 0;
    top: 50px;
    width: 240px;

    .line {
      height: 1px;
      background-color: #eee;
    }

    .item {
      height: 38px;
      line-height: 38px;
      margin: 3px 0;
      padding-left: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgb(247, 247, 247);
      }
    }
  }
`;
