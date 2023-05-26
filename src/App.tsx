import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "./pages/list-product";
import AddProduct from "./pages/add-product";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<ProductList />}/>
        <Route path={`${process.env.PUBLIC_URL}/add-product`} element={< AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;