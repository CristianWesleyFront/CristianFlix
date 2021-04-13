import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .item {
    margin: 5px;
  }

  h1 {
    text-align: center;
    font-size: 1.25em;
    font-weight: normal;

    span {
      font-weight: 700;
      font-size: 1.55rem;
    }
  }
`;
