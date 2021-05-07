import styled from 'styled-components';

export const Container = styled.div`
  color: var(--text);
  font-size: 1.2rem;
`;

export const ContainerError = styled.div`
  margin: 10px 0px;
  padding: 12px;
  color: var(--red);
  background-color: #ffd2d2;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    margin: 5px;
    font-size: 1.5em;
    vertical-align: middle;
  }
`;
