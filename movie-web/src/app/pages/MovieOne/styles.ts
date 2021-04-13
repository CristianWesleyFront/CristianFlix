import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
`;

export const ContainerInformations = styled.div`
  max-width: 1250px;
  display: flex;
  flex-wrap: wrap;
  div.informations {
    width: 70%;
    .name {
      font-size: 60px;
      font-weight: bold;
    }

    .info {
      font-size: 18px;
      font-weight: bold;
      margin-top: 15px;
      display: flex;
      align-items: center;
    }

    .year {
      margin: 0 15px;
    }

    .points {
      color: #46d369;
    }

    .description {
      margin-top: 15px;
      font-size: 20px;
      color: #999;
      max-width: 90%;
    }

    .informationText {
      margin-top: 15px;
      font-size: 18px;
      color: #999;
    }
  }

  img {
    width: 30%;
  }

  @media (max-width: 760px) {
    div.informations {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;

      .info {
        justify-content: center;
      }

      .description {
        margin-right: 0px;
        max-width: 100%;
      }
    }

    img {
      width: 50%;
      margin: auto;
    }

    .name {
      font-size: 40px;
    }
    .info {
      font-size: 16px;
    }
    .description {
      font-size: 14px;
      max-width: 100%;
      margin-right: 30px;
    }

    .genres {
      font-size: 14px;
    }
  }
`;
