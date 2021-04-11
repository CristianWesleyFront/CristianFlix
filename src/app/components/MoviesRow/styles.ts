import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  h2 {
    margin: 0px 0px 0px 30px;
  }

  .movieRowListarea {
    overflow-x: hidden;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    padding-left: 30px;
    &:hover {
      .movieRow {
        h2 {
          color: red;
        }
      }
    }
  }

  .movieRowList {
    transition: all ease 0.2s;

    display: flex;
    flex-direction: row;
  }

  .movieRow-left,
  .movieRow-right {
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: transparent;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.2s;

    svg {
      color: #fff;
    }
  }

  .movieRow-left {
    left: 0;
  }

  .movieRow-right {
    right: 0;
  }

  @media (max-width: 760px) {
    .movieRow-left,
    .movieRow-right {
      opacity: 1;
    }
  }
`;
