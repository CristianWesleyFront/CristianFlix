import styled from 'styled-components';

interface iLike {
  isLiked: boolean;
}

export const Container = styled.div`
  width: 200px;
  height: 290px;

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

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      .like {
        cursor: pointer;
        margin-right: 30px;
        transition: all ease 0.2s;
        &:hover {
          color: var(--red);
          transform: scale(1.2);
        }
      }

      a {
        color: var(--text);
        svg {
          font-size: 2rem;
          cursor: pointer;

          transition: all ease 0.2s;
          &:hover {
            color: var(--red);
            transform: scale(1.1);
          }
        }
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
`;

export const Like = styled.div<iLike>`
  margin-top: 2rem;
  cursor: pointer;
  color: ${props => (props.isLiked ? 'var(--red)' : '#fff')};

  transition: all ease 0.2s;
  &:hover {
    color: var(--red);
    transform: scale(1.2);
  }
`;
