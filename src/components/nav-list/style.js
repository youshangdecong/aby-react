import styled from "styled-components";

export const NavListWraper = styled.div`
  overflow: hidden;
  position: relative;

  .content {
    display: flex;
    line-height: 50px;
    text-align: center;
    transition: all 0.6s ease;

    .active {
      background-color: rgb(0, 132, 138);
      color: #fff;
    }
    .nav-item {
      cursor: pointer;
      box-sizing: border-box;
      min-width: 120px;
      flex-shrink: 0;
      width: auto;
      padding: 0 16px;
      height: 50px;
      border: 1px solid #eee;
      border-radius: 5px;

      &:nth-child(n + 2) {
        margin-left: 16px;
      }
    }
  }
`;
