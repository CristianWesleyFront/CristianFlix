import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5rem;

  .loadMone {
    margin-top: 16px;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    border: none;
    cursor: pointer;
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    &:hover {
      opacity: 0.7;
    }
  }
`;
