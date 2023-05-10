import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-style: italic;
  font-size: 6rem;
  line-height: 7rem;
  padding-left: 1rem;

  @media (max-width: 1024px) {
    font-size: 5rem;
    line-height: 6rem;
    letter-spacing: -0.2rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 5rem;
    letter-spacing: -0.2rem;
  }
`;

export const ColoredTitle = styled(Title)`
  color: var(--purple);
  padding-left: 0;
`;
