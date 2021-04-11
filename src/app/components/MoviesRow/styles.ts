import styled from 'styled-components';

interface iLike {
  isLiked: boolean;
}

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

  .movieRowItem {
    width: 200px;
    height: 290px;
    cursor: pointer;

    transform: scale(0.9);
    transition: all ease 0.2s;

    overflow: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      .movieRow-left,
      .movieRow-right {
        opacity: 1;
      }
    }

    .informations {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      padding: 8px;

      position: absolute;
      top: 0;
      left: 0;

      color: #fff;

      .title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
      }

      .like {
        margin-top: 40px;
        cursor: pointer;

        transition: all ease 0.2s;
        &:hover {
          color: #e50914;
          transform: scale(1.2);
        }
      }
    }

    &:hover {
      transform: scale(1.2);
      img {
        filter: blur(5px);
      }

      .informations {
        opacity: 1;
      }
    }
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

export const Like = styled.div<iLike>`
  margin-top: 2rem;
  cursor: pointer;
  color: ${props => (props.isLiked ? '#e50914' : '#fff')};

  transition: all ease 0.2s;
  &:hover {
    color: #e50914;
    transform: scale(1.2);
  }
`;
