import React, { useState, useEffect, useRef } from "react";
import { Checkbox, Container, DisplayContainer, FetchingImg, ItemDescription, LoadingContainer, ProductContainer } from "./style";
import api from "../../api";
import LoadingImage from "../../assets/images/flork_lost-removebg-preview.png";
const API = "https://api-leon-scandiweb.cyclic.app/select";

interface DATA {
  sku: string,
  name: string, 
  price: string,
  type: string,
  size: number,
  weight: number,
  height: number,
  width: number,
  length: number,
}

interface IProps {
  del: boolean
}

const ProductDisplay = ({del}:IProps) => {
  const [productList, setProductList] = useState<Array<DATA>>([]);
  const [checkedItems, setCheckedItems] = useState<Array<boolean>>([]);
  const [deleteList, setDeleteList] = useState<Array<any>>([]);
  const renderBlock = useRef(0) 
  
  useEffect(() => {
    const fetchData = async (data: any) => {
      try {
        const response = await fetch(data);
        const results = await response.json();
        setProductList(results);
        
        const checked = new Array(results.length).fill(false);
        setCheckedItems(checked);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData(API);
  }, []);
  
  
  const handleOnChange = (position:number) => {
    const updatedCheckedItems = checkedItems.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedItems(updatedCheckedItems);
    
    let skuList = updatedCheckedItems.map(
      (currentState, index) => {
        if (currentState === true) {
          return productList[index].sku;
        }
      }
    );

    const cleanList = skuList.filter( Boolean );
    cleanList.forEach(queryReady)
    function queryReady(item:any, index:number, arr:any) {
      arr[index] = `sku=${item}`;
    }
    
    setDeleteList(cleanList)     
  };
    
  useEffect(() => {
    if(renderBlock.current === 1 ) { 
      api.delete(`/delete?${deleteList.join("&")}`).then((res) => {
        console.log(res.data)
      }).catch((error) => {
          console.log(error)
        });
      window.location.reload()
    };
    renderBlock.current = renderBlock.current + 1;
  }, [del]);
  
  return (
    <Container>
      {productList.length === 0 && 
        <LoadingContainer>
          <h4>Fetching Products from Database ...</h4>
          <FetchingImg alt= "" src={LoadingImage} />
        </LoadingContainer>
      }
      {productList.length > 0 &&
        <DisplayContainer>
          {productList.map((item: any, index) => (
            <ProductContainer item={item.type}>              
              <Checkbox>&#x1F5D1;
                <input 
                  className="delete-checkbox"
                  type="checkbox"
                  value={item.sku}
                  id={`custom-checkbox-${index}`}
                  checked={checkedItems[index]}
                  onChange={() => handleOnChange(index)}
                />
                <span className="checkmark"></span>
              </Checkbox>
              <ItemDescription>
                <span className="sku" >{item.sku}</span>
                <span className="name" >{item.name}</span>
                <span className="price" >{item.price} $</span>
                {item.size && <span className="size" >Size: {item.size}MB</span>}
                {item.weight && <span className="weight" >Weight: {item.weight}KG</span>}
                {item.height && <span className="dimention" >Dimention (H x W x L):<br />{item.height} x {item.width} x {item.length} CM</span>}
              </ItemDescription>
            </ProductContainer>
          ))}
        </DisplayContainer>  
      }
    </Container>
  );
};

export default ProductDisplay;