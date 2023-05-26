import styled from "styled-components";

export const SearchTabBarWraper = styled.div`
  .tab-hd {
    display: flex;

    > div {
      cursor: pointer;
      margin: 0 15px;
      padding: 6px 0;
      font-size: 16px;
      border-bottom: 2px solid transparent;

      &.active {
        border-bottom-color: red;
      }
    }
  }

  .tab-bd {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 60px;
    z-index: 99;
    width: 850px;
    height: 66px;
    background-color: #fff;
    border-radius: 33px;
    border: 1px solid #eee;
    transform: translate(-50%);

    .tab-bd-item {
      flex: 1;
      padding-left: 25px;
      border-right: 1px solid #ccc;

      &:last-child {
        border-right: 0;
      }
      .title {
        font-size: 12px;
      }
      .subtitle {
        position: relative;
        top: -2px;
        color: #666;
        font-weight: 400;
      }
    }
  }
`;
