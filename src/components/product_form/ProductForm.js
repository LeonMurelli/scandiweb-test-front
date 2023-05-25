import { useEffect, useRef, useState } from "react";
import InputBase from "./subcomponents/InputBase";
import { productTypes } from "./product-types";
import { Container, FormContainer, ImgContainer } from "./styles";
import api from "../../api";
import dvd from "../../assets/images/flork_dvd.png";
import book from "../../assets/images/flork_book.png";
import furniture from "../../assets/images/flork_furniture.png";

export default function ProductForm(
  save, 
  {defaultValues = {}},
) {

  const [product, setProduct] = useState(defaultValues);

  const updateProduct = (key, value) => setProduct({...product, [key]: value});

  const renderBlock = useRef(0);

  const handleSubmit = async () => {
    api.post('/add', product).then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });
    setProduct(defaultValues);
  };
  
  useEffect(() => {
    if(renderBlock.current === 1) { 
      document.getElementById("product_form").requestSubmit();
    };
    renderBlock.current = renderBlock.current + 1;
  }, [save]
  );

    return (
      <Container>
        <FormContainer id="product_form" onSubmit={handleSubmit}>
          <InputBase label="SKU">
            <input 
              id="sku" 
              type='text' 
              required 
              onChangeCapture={e => updateProduct(`sku`, e.target.value)} 
              onInput={e => e.target.setCustomValidity('')} 
              onInvalid={e => e.target.setCustomValidity("Setting a unique SKU code for the product is required")}
              placeholder="Insert product's SKU code (must be unique for each product)"
            />
          </InputBase>  
          
          <InputBase label="Name">
            <input 
              id="name" 
              type='text' 
              required 
              onChange={e => updateProduct(`name`, e.target.value)} 
              onInput={e => e.target.setCustomValidity('')} 
              onInvalid={e => e.target.setCustomValidity("Setting the product's name is required")} 
              placeholder="Insert product's name"
            />
          </InputBase>
          
          <InputBase label="Price">
            <input 
              id="price" 
              type='text' 
              required 
              onChange={e => updateProduct(`price`, e.target.value)}
              onInput={e => e.target.setCustomValidity('')} 
              onInvalid={e => e.target.setCustomValidity("Setting the product's price is required")} 
              placeholder="Insert price in dolars (numbers only)"
            />
          </InputBase>

          <InputBase label='Select a product type below'>
            <select
              id="productType"
              defaultValue={product.type}
              required
              onChange={e => updateProduct(`type`, e.target.value)}
              onInput={e => e.target.setCustomValidity('')} 
              onInvalid={e => e.target.setCustomValidity("Setting the product's type is required")}
            >
              <option value={''}>(None)</option>
              { Object.entries(productTypes).map(([value, {label}], index) => (
                <option key={index} value={value}>{label}</option>
              ))}
            </select>
          </InputBase>
          
          <TypeSpecificForm product={product} required onChange={updateProduct} />
        </FormContainer>
        <ImgContainer>
          <img alt= "" src={product.type ===`dvd`? dvd : product.type === `book`? book : product.type === `furniture` && furniture} />
        </ImgContainer>
      </Container>
    );
};

function TypeSpecificForm({ product, onChange }) {
  const productType = productTypes[product.type];
  if (!productType?.renderForm) return null;

  const Component = productType.renderForm

  return <Component product={product} onChange={onChange} />
}