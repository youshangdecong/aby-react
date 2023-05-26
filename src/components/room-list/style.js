import styled from "styled-components";

export const RoomListWraper = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.noWrap ? "nowrap" : "wrap")};
  margin: 20px -8px 0;
`;
