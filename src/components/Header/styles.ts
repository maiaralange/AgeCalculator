import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  padding: 3rem 0 0 3rem;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    gap: 0.5rem;
  }
`;

export const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.5rem 3rem 0.5rem 3rem;
  position: relative;

  @media (max-width: 768px) {
    margin: 1rem;
    justify-content: center;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--shadow);
  position: absolute;
  left: 0;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  border: none;
  z-index: 1;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    background-color: var(--black);
  }

  @media (max-width: 768px) {
    height: 3rem;
    width: 3rem;

    img {
      height: 1.5rem;
    }
  }
`;
