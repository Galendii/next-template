import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  background: var(--light-gray);
`;
export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 32px;
`;
export const Content = styled.div`
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 16px 32px;
`;
