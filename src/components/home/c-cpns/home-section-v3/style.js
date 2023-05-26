import styled from "styled-components";

export const HomeSectionV3Wrappre = styled.div`
  .city_list {
    display: flex;
    margin: 0 -8px;

    .city_item {
      width: 20%;
      padding: 0 8px;
      box-sizing: border-box;
      flex-shrink: 0;

      .content {
        border-radius: 6px;
        overflow: hidden;
        position: relative;

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 60%;
          z-index: 1;
          background: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 3%,
            rgb(0, 0, 0) 100%
          );
        }

        img {
          width: 100%;
        }

        .info {
          position: absolute;
          z-index: 9;
          bottom: 30px;
          left: 0;
          right: 0;
          text-align: center;
          color: #fff;

          .city {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          .price {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
