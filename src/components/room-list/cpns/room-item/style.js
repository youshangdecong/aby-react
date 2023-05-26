import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  .swiper {
    position: relative;

    &:hover .left-arrow {
      visibility: visible;
    }
    &:hover .right-arrow {
      visibility: visible;
    }

    .left-arrow,
    .right-arrow {
      cursor: pointer;
      display: flex;
      visibility: hidden;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      color: #fff;
    }
    .left-arrow {
      left: 0;
      background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0)
      );
    }
    .right-arrow {
      right: 0;
      background-image: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0)
      );
    }

    .swiper-dots {
      position: absolute;
      bottom: 10px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 33%;

      .dot-item {
        flex-shrink: 0;
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 5px;

        &.active {
          width: 9px;
          height: 9px;
        }
      }
    }
  }

  width: ${(props) => props.itemWidth || "25%"};
  flex-shrink: 0;
  padding: 0 8px;
  box-sizing: border-box;
  margin-bottom: 20px;

  .cover-img {
    position: relative;
    padding-top: 66%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .label {
    font-size: 12px;
    color: #767676;
    margin: 6px 0 2px;
  }

  .title {
    color: ${(props) => props.theme.color.secondaryColor};
    font-weight: 800;
    line-height: 1.4;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 14px;
    color: #666;
    margin: 3px 0;
  }

  .rating {
    font-size: 12px;
    display: flex;
    align-items: center;

    .bottom-i {
      margin-left: 2px;
    }
  }
`;
