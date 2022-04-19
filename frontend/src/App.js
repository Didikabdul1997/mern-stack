import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/AddProduct";
import EditProduct from './components/EditProduct';
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
