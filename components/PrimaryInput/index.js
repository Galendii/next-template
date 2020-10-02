import styled from "styled-components";

const PrimaryInput = styled.input`
  border: unset;
  border-bottom: 1px solid var(--secondary);
  background: transparent;
  width: calc(100% - 30px);
  margin-bottom: 2em;
  outline: none;
  padding: 10px;
  color: var(--white);
  font-size: var(--font-md);
  &&:focus {
    border-radius: var(--radius-sm);
    border: 1px solid var(--secondary-100);
  }

  &&:hover {
    border-bottom: 1px solid var(--secondary-100);
  }

  &&::placeholder {
    color: var(--white);
  }
`;
export default PrimaryInput;
