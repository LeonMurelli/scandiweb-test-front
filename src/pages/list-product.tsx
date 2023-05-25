import ListHeader from "../components/headers/list_header";
import ProductDisplay from "../components/product_display";
import Footer from "../components/footer";
import { Container } from "./styles";
import { useState } from "react";

function ProductList(): JSX.Element {
    const [del, setDel] = useState(false);
    return (
        <Container>
            <ListHeader 
                del={del} 
                setDel={setDel} 
            />
            <ProductDisplay 
                del={del} 
            />
            <Footer />
        </Container>
    )
}

export default ProductList;