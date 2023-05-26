import styled from "styled-components";

export const HomeCenterWraper = styled.div`
  position: relative;

  .search {
    width: 300px;
    height: 48px;
    border: 1px solid #ccc;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      margin-left: 20px;
    }
    .search-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: #fff;
      margin-right: 7px;
    }
  }

  .search-detail {
  }
`;
