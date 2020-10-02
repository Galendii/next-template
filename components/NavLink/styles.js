import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Link = styled.div`
  font-size: var(--font-md);
  color: var(--white);
  width: 80%;
  padding: 16px 32px;
  margin: 7px 0;
  cursor: pointer;
  &&:hover {
    background: var(--secondary);
    border-radius: var(--radius-sm);
  }
  transition: all ease-in-out 0.2s;
`;

export const Dropdown = styled.div`
  flex-direction: column;
  display: none;
  transition: all ease-in-out 0.2s;
  &.show {
    display: flex;
  }
`;

export const DropItem = styled.div`
  font-size: var(--font-md);
  color: var(--white);
  width: 80%;
  padding: 10px 24px 10px 40px;
  margin: 7px 0;
  cursor: pointer;
  &&:hover {
    background: var(--secondary);
    border-radius: var(--radius-sm);
  }
  && span {
    padding-left: 5px;
    color: inherit;
  }

  transition: all ease-in-out 0.2s;
`;
