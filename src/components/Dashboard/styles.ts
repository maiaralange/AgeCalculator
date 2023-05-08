import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Shape = styled.div`
  width: 50rem;
  height: 40rem;
  text-align: center;
  background-color: var(--shape);
  border-radius: 2rem;
  border-bottom-right-radius: 15rem;
  box-shadow: 0 0.25rem 0.5rem 0 var(--shadow);
`;
