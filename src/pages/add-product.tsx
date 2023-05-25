import { useState } from "react";
import Footer from "../components/footer";
import AddHeader from "../components/headers/add_header";
import { Container } from "./styles";
import ProductForm from "../components/product_form/ProductForm";

function AddProduct(): JSX.Element {
    const [save, setSave] = useState(false);

    return (
        <Container>
            <AddHeader 
                save={save} 
                setSave={setSave}
            />
            <ProductForm 
                save={save}
                setSave={setSave}
            />
            <Footer />
        </Container>
    )
}

export default AddProduct;