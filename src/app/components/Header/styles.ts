import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: ${props => props.color};
  transition: all ease 0.5s;

  .headerLogo {
    height: 45px;
    img {
      height: 100%;
    }
  }

  .headerUser {
    height: 35px;
    img {
      height: 100%;
      border-radius: 3px;
    }
  }
`;
