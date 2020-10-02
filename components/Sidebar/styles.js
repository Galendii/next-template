import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: var(--primary);
`;
export const Logo = styled.img`
  height: 50px;
  width: auto;
`;
export const Body = styled.div`
  width: 100%;
  padding-top: 20px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const NavLink = styled.div`
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
export const Footer = styled.div`
  justify-self: flex-end;
  background: var(--primary);
`;
export const TextMuted = styled.div`
  text-align: center;
  padding: 5px 10px;
  font-size: var(--font-mute);
  color: var(--white);
`;
