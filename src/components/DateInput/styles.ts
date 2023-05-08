import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
`;

export const Title = styled.h4`
  color: var(--text-body);
`;

export const Input = styled.input`
  border: 0.1rem solid var(--shadow);
  border-radius: 0.25rem;
  height: 3rem;
  width: 10rem;
`;
