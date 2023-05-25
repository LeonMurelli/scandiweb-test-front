import { SaveButton, ButtonContainer, Container, CancelButton, TitleContainer } from "./style";
import { Link } from "react-router-dom";

interface IProps {
    save: boolean
    setSave: (save: boolean) => void
}

function AddHeader({setSave, save}: IProps){
    return (
        <Container>
            <TitleContainer>
                <h1>
                    Product Add
                </h1>
            </TitleContainer>
            <ButtonContainer >
                <SaveButton onClick={() => setSave(!save)}>
                    SAVE
                </SaveButton>
                <Link to='/'>
                    <CancelButton>
                        CANCEL
                    </CancelButton>
                </Link>
            </ButtonContainer>
        </Container>
    )
}

export default AddHeader;