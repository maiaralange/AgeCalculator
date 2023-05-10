import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
