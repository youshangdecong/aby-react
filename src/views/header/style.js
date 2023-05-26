import styled from "styled-components";

export const HeaderWraper = styled.div`
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  left: 0;
  right: 0;
  z-index: 9999;

  .top-header {
    position: relative;
    z-index: 9999;
    background-color: #fff;

    .top-1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      padding: 0 25px;
      font-size: 14px;
      font-weight: 600;
    }

    .top-2 {
      transition: all 300ms ease;
    }
  }

  .cover {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
