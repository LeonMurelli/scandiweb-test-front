import styled from "styled-components";

export const FormItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;  
    font-size: 20px;
    input, select {
        appearance: none;
        border: none;
        border-bottom: 2px solid black;
        font-size: 17px;
        padding-top: 10px;

    :hover {
        background-color: rgba(240, 240, 240, 1);
    }

    }
`;