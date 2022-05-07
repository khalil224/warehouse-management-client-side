
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Blogs from './components/Pages/Blogs/Blogs';
import Checkout from './components/Pages/Checkout/Checkout';

import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import InventoryDetail from './components/Pages/InventoryDetail/InventoryDetail';
import AddProduct from './components/Pages/Login/AddProduct/AddProduct';
import Login from './components/Pages/Login/Login';
import ManageProducts from './components/Pages/Login/ManageProducts/ManageProducts';
import MyProducts from './components/Pages/Login/MyProducts/MyProducts';
import PrivateAuth from './components/Pages/Login/PrivateAuth/PrivateAuth';
import NotFound from './components/Pages/NotFound/NotFound';
import Products from './components/Pages/Products/Products';
import Register from './components/Pages/Register/Register';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/products' element={<Products></Products>} ></Route>
        <Route path='inventory/:id' element={<PrivateAuth>
          <InventoryDetail></InventoryDetail>
        </PrivateAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageproduct' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/myproduct' element={<MyProducts></MyProducts>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<PrivateAuth>
          <Checkout></Checkout>
        </PrivateAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
