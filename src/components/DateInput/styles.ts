import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
`;

export const Title = styled.h5`
  color: var(--text-body);
  letter-spacing: 0.1rem;
`;

export const Input = styled.input`
  border: 0.1rem solid var(--shadow);
  border-radius: 0.25rem;
  height: 4rem;
  width: 10rem;
  padding: 1rem;
  font-weight: bold;
  font-size: 2rem;

  &:focus {
    outline: none;
    border-color: var(--purple);
  }
`;
