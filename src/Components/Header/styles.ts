import styled from "styled-components";

export const Container = styled.div`
  background: #292929;
  height: 400px;
  color: #9df2ed;
  padding-top: 45px;

  .buttons-header {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      list-style-type: none;
      gap: 20px;

      li {
      }
    }
  }

  .info-header {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 100px;

    h4 {
      color: #fcfcfc;
      font-size: 30px;
      font-weight: 600;
    }

    p {
      color: #9df2ed;
      font-size: 20px;
      font-weight: 500;
    }

    img {
      width: 400px;
    }

    .border-image {
      width: 100%;
    }
  }
`;
