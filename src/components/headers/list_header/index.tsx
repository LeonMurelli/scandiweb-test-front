import { AddButton, ButtonContainer, Container, DeleteButton, TitleContainer } from "./style";
import { Link } from "react-router-dom";

interface IProps {
    del: boolean
    setDel: (del: boolean) => void
}

function ListHeader({del, setDel}: IProps){
    return (
        <Container>
            <TitleContainer>
                <h1>
                    Product List
                </h1>
            </TitleContainer>
            <ButtonContainer>
                <Link to='/add-product'>
                    <AddButton>
                        ADD
                    </AddButton>
                </Link>
                <DeleteButton id="delete-product-btn" onClick={() => setDel(!del)}>
                    MASS DELETE
                </DeleteButton>
            </ButtonContainer>
        </Container>
    )
}

export default ListHeader;