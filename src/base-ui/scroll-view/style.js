import styled from "styled-components";

export const ScrollViewWraper = styled.div`
  position: relative;

  .al-left,
  .al-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 999;
  }

  .al-left {
    left: -14px;
  }
  .al-right {
    right: -14px;
  }

  .scroll-content {
    overflow: hidden;

    > div {
      transition: all 0.6s ease;
    }
  }
`;
