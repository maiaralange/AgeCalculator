import { styled } from 'styled-components';

interface ErrorProps {
  error?: string;
}

export const Container = styled.div<ErrorProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;

  ${(props) =>
    props.error == 'true' &&
    `
    h5 {
      color: var(--red)
    }

    input {
      border: 0.1rem solid var(--red)
    }
  `}
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.1rem;
  color: var(--red);
  font-style: italic;
  font-size: 0.75rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
