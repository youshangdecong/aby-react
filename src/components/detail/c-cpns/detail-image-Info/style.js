import styled from "styled-components";

export const DetailImageInfoWrapper = styled.div`
  .image-d {
    display: flex;
    height: 600px;

    &:hover {
      .cover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.8s ease;
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s ease;
    }
    .left {
      flex: 1;
      position: relative;
      overflow: hidden;

      &:hover {
        .cover {
          background-color: transparent;
        }
        img {
          transform: scale(1.1);
        }
      }
    }

    .right {
      flex: 1;

      display: flex;
      flex-wrap: wrap;

      .img-item {
        position: relative;
        box-sizing: border-box;
        width: 50%;
        height: 50%;
        border: 1px solid black;
        overflow: hidden;

        &:hover {
          .cover {
            background-color: transparent;
          }
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;
