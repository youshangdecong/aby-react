import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;

    .desc {
      margin-top: 10px;
      font-size: 14px;
      letter-spacing: 2px;
      color: #222222;
    }

    .ant-pagination-item {
      border: 0;
    }

    .ant-pagination-item-active {
      border-radius: 50%;
      background-color: black;

      a {
        color: #fff;
      }
    }
    .ant-pagination-item-link {
      border: 0;

      span {
        color: black;
        font-size: 14px;
      }
    }
  }
`;
