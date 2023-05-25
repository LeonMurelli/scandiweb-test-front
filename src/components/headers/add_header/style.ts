import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    font-family: 'Wix Madefor Text', sans-serif;
`;

export const TitleContainer = styled.div`
    width: calc(90% - 300px);
    height: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 300px;
    height: 100px;
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const SaveButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 5px;
    box-shadow: 5px 10px 8px;
    cursor: pointer;
    transition: 1s;
    :hover{
        transform: scale(1.2);
        box-shadow: none;
        background-color: rgba(240, 240, 240, 1);
    }
`;

export const CancelButton = styled.button`
    width: 120px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 5px 10px;border-radius: 5px;
    box-shadow: 5px 10px 8px;
    cursor: pointer;
    transition: 1s;
    :hover{
        transform: scale(1.2);
        box-shadow: none;
        background-color: rgba(240, 240, 240, 1);
    }
`;
