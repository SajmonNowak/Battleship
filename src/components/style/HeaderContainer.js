import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #006494;
  h1 {
    font-size: 124px;
    text-align: center;
    color: #f4a261;
    text-transform: uppercase;
  }

  @media (max-width: 1100px){
    h1 {
      font-size: 62px;
    }
  }

  @media (max-width: 600px){
    h1 {
      font-size: 36px;
    }
  }
`;
