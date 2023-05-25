import styled from "styled-components";
import dvd from "../../assets/images/dvd_icon-removebg-preview.png";
import book from "../../assets/images/kindpng_1145683-removebg-preview.png";
import ProductList from "../../pages/list-product";
import furniture from "../../assets/images/household-sofa-icon-5.png"

export const Container = styled.div`
    width: 90%;
    min-height: calc(100vh - 220px);
    margin: 100px 5% 0 5%;
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 220px);
    position: relative;
    h4 {
        padding-top: 40px;
    };
`;

export const FetchingImg = styled.img`
    width: 400px;
    position: relative;
    left: calc(50% - 200px);
    padding-top: 10%;
`;

export const DisplayContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    padding: 20px 20px 0 0px;
    justify-items: center;
`;
export const ProductContainer = styled.div<{ item: any}>`
    width: 220px;
    height: 150px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(230, 230, 230, 1);
    display: flex;
    padding: 2.5% 2.5% 2.5% 2%;
    align-items: baseline;
    justify-content: baseline;
    background-color: rgba(240, 240, 240, 90%);
    background-image: url(${ ProductList  => ProductList.item === "dvd"? dvd : ProductList  => ProductList.item === "book"? book : ProductList  => ProductList.item === "furniture" && furniture});
    background-position: 50% 50%;
    background-size: 95% 95%;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
    transition: 0.5s;
    :hover {
        background-color: rgba(235, 235, 235, 90%);
        transform: scale(1.1);
        width: 85%;
        background-size: 70% 95%;
    }
`;

export const Checkbox = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    };
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: rgba(238, 238, 238, 0);
        border-radius: 3px;
    };
    :hover input ~ .checkmark {
        background-color: rgba(204, 204, 204, 1);
    };
    input:checked ~ .checkmark {
        background-color: rgba(33, 150, 243, 1);
    };
    .checkmark:after {
        content: '\u2714';
        position: absolute;
        display: none;
        color: white;
        top: -4px;
        left: 4px;
    };
    input:checked ~ .checkmark:after {
        display: block;
    };
    .container .checkmark:after {
        left: 3px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export const ItemDescription = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    span {
        text-align-last: center;
    };
`;


