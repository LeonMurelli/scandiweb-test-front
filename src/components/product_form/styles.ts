import styled from "styled-components";
import warehouse from "../../assets/images/cargowise-warehouse-new1.png";

export const Container = styled.div`
  width: 90%;
  min-height: calc(100vh - 220px);
  margin: 100px 5% 0 5%;
  padding: 20px 20px 0 0px;
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.form`
  width: 33%;
  input, select {
    padding: 8px;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: end;
  background-image: url(${warehouse});
  background-repeat: no-repeat;
  background-position: 50% 95%;
  background-size: 300%;
  background-color: rgba(255, 255, 255, 60%);
  background-blend-mode: lighten;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 20px 30px rgba(255, 255, 255, 1) inset;
`;

