import styled from "styled-components";

export const CellContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid;
  background-color: ${(props) =>
    props.hasShip ? "#f02d3a" : props.hasWater ? "#62b4cf" : "white"};
  font-size: 50px;
  text-align: center;

  .flame {
    width: 50px;
    height: 50px;
    animation: grow 1s;
  }
  @keyframes grow {
    0% {
      transform: scale(0);
    }
    75% {
      transform: scale(1.25);
    }

    100% {
      transform: scale(1);
    }
  }

  .missed {
    animation: shake 0.5s;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-0.5px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(2px, 0, 0);
    }
  }

  @media (max-width: 1135px) {
    width: 25px;
    height: 25px;
    font-size: 25px;

    .flame {
      width: 25px;
      height: 25px;
    }
  }
`;
