import styled from "styled-components";

export const FooterContentInfoWraper = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #eee;

  .item {
    flex: 1;
    font-size: 14px;
    font-weight: 600;

    dt {
      margin-bottom: 20px;
      color: #484848;
    }

    dd {
      color: #767676;
      margin-bottom: 5px;
    }
  }
`;
