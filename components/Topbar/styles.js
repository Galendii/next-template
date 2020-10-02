import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 0;
  flex: 1;
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PageTitle = styled.div`
  font-size: var(--font-lg);
  color: var(--primary);
  border-bottom: 1px solid var(--secondary);
  &&::first-letter {
    text-transform: capitalize;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-around;
`;
export const Name = styled.div`
  font-size: var(--black);
  margin-right: 7px;
`;
export const Avatar = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background: var(--light-blue);
`;
export const Logout = styled.div`
  color: var(--red);
  cursor: pointer;
  font-size: var(--font-md);
  display: flex;
  align-items: center;
  margin: 0 20px;
  svg {
    margin: 0 10px;
  }
`;
