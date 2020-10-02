import styled from "styled-components";
import PrimaryButton from "../../components/PrimaryButton";
export const Container = styled.div`
  background: var(--primary);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: max(400px, 60%);
  height: 80vh;
  border-radius: var(--radius-sm);
  display: flex;
  background: var(--primary-500);
  padding: 0 32px;
  -webkit-box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.75);
`;
export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 32px;
  width: 50%;
`;
export const Logo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 25px;
`;

export const Text = styled.div`
  color: var(--white);
  font-size: var(--font-lg);
  text-align: center;
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
  margin-top: 30px;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  overflow: hidden;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--secondary);
  font-size: var(--font-sm);
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    color: var(--secondary-100);
  }
`;

export const CustomButton = styled(PrimaryButton)`
  align-self: center;
`;
export const TextMuted = styled.div`
  margin: 20px;
  color: var(--white);
  font-size: var(--font-sm);
  text-align: center;
`;
