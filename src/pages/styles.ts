import styled from "styled-components";

export const Container = styled.body`
// this triggers a warning, but changing the theme to div breaks the header (blank space above it).
    width: 100%;
    height: 100%;
`;
