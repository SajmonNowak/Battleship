import styled from "styled-components";

const ShipSelectionUI = styled.div`
    display: flex;
    flex-direction: row;

    .shipCell {
    width: 50px;
    height: 50px;
    border: 1px solid;
    }

    .shipList{
        margin-left: 50px;
    }

    .ship{
        display: flex;
        flex-direction: row;
        margin: 20px;
    }
`

export default ShipSelectionUI;