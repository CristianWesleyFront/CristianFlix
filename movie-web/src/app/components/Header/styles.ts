import styled from 'styled-components';
import search from 'assets/search-3-24.png';

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

  .alignRigth {
    display: flex;
    justify-content: space-between;
  }

  .headerUser {
    margin-left: 15px;
    height: 35px;
    img {
      height: 100%;
      border-radius: 3px;
    }
  }
`;

export const SearchContainer = styled.form`
  input {
    outline: none;
  }
  input[type='search'] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }

  input[type='search'] {
    background: transparent url(${search}) no-repeat 9px center;
    border: solid 2px transparent;
    padding: 9px 10px 9px 32px;
    width: 55px;

    -webkit-border-radius: 10em;
    -moz-border-radius: 10em;
    border-radius: 10em;

    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }

  input[type='search']:focus {
    width: 130px;
    background-color: var(--background);
    border-color: #fff;

    -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }

  input[type='search'] {
    width: 15px;
    padding-left: 10px;
    color: transparent;
    cursor: pointer;
  }
  input[type='search']:hover {
    background-color: var(--background);
  }
  input[type='search']:focus {
    width: 130px;
    padding-left: 45px;
    color: #fff;
    background-color: var(--background);
    cursor: auto;
  }
  input:-moz-placeholder {
    color: transparent;
  }
  input::-webkit-input-placeholder {
    color: transparent;
  }
`;
