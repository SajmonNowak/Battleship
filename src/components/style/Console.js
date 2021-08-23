import styled from "styled-components";

export const Console = styled.div`
  margin: 0 auto;
  width: fit-content;
  min-height: 40px;
  text-align: center;
  color: #f4a261;
  font-size: 32px;
  font-weight: bold;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  margin-top: 50px;

  @media (max-width: 650px){
    font-size: 24px;
    margin-top: 20px;
  }
`;
