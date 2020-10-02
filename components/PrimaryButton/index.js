import styled from "styled-components";

const PrimaryButton = styled.button`
  outline: none;
  border: unset;
  color: var(--white);
  padding: 16px 32px;
  width: 100%;
  text-transform: capitalize;
  background: var(--secondary);
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 2em;
  &:hover {
    background: var(--secondary-100);
  }
`;
export default PrimaryButton;
