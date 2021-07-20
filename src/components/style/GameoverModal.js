import styled from "styled-components";

const GameoverModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0px;
    left:0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 50px;
    color: white;

    button {
        margin-top: 20px;
        width: 200px;
        height: 50px;
    }
`

export default GameoverModal;