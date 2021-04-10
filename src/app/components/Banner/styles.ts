import styled from 'styled-components';

export const Container = styled.section`
  height: 130vh;
  background-size: cover;
  background-image: url('https://occ-0-3852-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbjlMwIFRYm5hHuFUesxRW8SKq-dqlGLN5yZJ3QZRgIrUEXEmNofkq_T9s1mkGgQh8cW2hW6ek412OdVSheRW7MR9JJ5.jpg?r=fc4');

  .bannerGradient {
    width: inherit;
    height: inherit;
    background: linear-gradient(
      to right,
      var(--background) 5%,
      transparent 70%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
  }

  .search {
    margin-top: 54px;
    h2.title {
      font-size: 60px;
      font-weight: bold;
    }

    input {
      width: 500px;
      margin-bottom: 15px;
      font-size: 30px;
      padding: 12px 25px;
      border-radius: 5px;
      text-decoration: none;
      margin-right: 10px;
      opacity: 0.8;
      background-color: #333;
      color: #fff;
      border: none;
    }
  }

  .bannerButtons {
    margin-top: 15px;
  }

  .seachButton,
  .clearButton {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .seachButton:hover,
  .clearButton:hover {
    opacity: 0.7;
  }
  .seachButton {
    background-color: #fff;
    color: #000;
  }

  .clearButton {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
  }
`;
