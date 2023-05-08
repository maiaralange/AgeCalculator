import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  padding: 3rem 0 0 3rem;
  gap: 1.5rem;
`;

export const Line = styled.div`
  height: 1px;
  width: 75%;
  margin-left: 3rem;
  background-color: var(--shadow);
`;

export const Submit = styled.div`
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled.button`
  background-color: var(--purple);
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  border: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    background-color: var(--black);
  }
`;
