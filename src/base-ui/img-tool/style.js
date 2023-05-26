import styled from "styled-components";

export const ImgToolWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(51, 51, 51);
  display: flex;
  flex-direction: column;

  .top {
    height: 86px;
    display: flex;
    justify-content: flex-end;

    .cancel {
      padding-top: 15px;
      padding-right: 20px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      color: #fff;
      cursor: pointer;
    }
    .right {
      color: #fff;
      cursor: pointer;
    }
    .content {
      width: 100vh;
      height: 100%;
      position: relative;
      overflow: hidden;

      img {
        margin: 0 auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100%;
      }
    }
  }
  .foot {
    height: 100px;
    margin-top: 10px;
    background-color: red;
  }

  .fade-enter {
    transform: ${(props) =>
      props.isNextImg ? "translate(100%)" : "translate(-100%)"};
    opacity: 0;
  }
  .fade-enter-active {
    transform: translate(0);
    opacity: 1;
    transition: all 200ms ease;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }

  .bottom-img-detail {
    position: relative;
    height: 100px;
    margin: 10px 0;

    .content {
      margin: auto;
      width: 100vh;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;

      .img-item {
        width: 100px;
        margin-right: 10px;
      }
    }
    .info {
      position: relative;
      display: flex;
      color: #fff;
      font-size: 14px;
      justify-content: space-between;

      .right {
        position: relative;
        padding-right: 22px;
      }

      .right::after {
        content: "";
        margin: 0 3px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top-color: #fff;
        position: absolute;
        top: 8px;
        transform: ${(props) =>
          props.isshowImgList ? "rotate(0)" : "rotate(180deg)"};
        transform-origin: 50% 25%;
        transition: all 200ms ease;
      }
    }
    .dot-box {
      height: ${(props) => (props.isshowImgList ? "68px" : "0")};
      transition: all 200ms ease;
      overflow: hidden;
    }
  }
  .img-item {
    &.active {
      opacity: 1;
    }
    opacity: 0.6;
    img {
      height: 68px;
    }
  }
`;
