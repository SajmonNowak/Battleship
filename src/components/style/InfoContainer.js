import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  color: #ff8800;
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
  margin-left: 20px;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

   @media (max-width:1140px){
     font-size: 12px;

     img {
       width: 25px;
       height: 25px;
     }
   }
`;
