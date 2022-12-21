import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/ItemlistContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetail/Itemdetailcontainer';
import {CartContextProvider} from './componentes/Context/CartContext'
import Cartview from './componentes/cart/Cartview';
import ThankYou from './componentes/ThankYou/ThankYou';
import Formulario from './componentes/Contacto/Formulario';
function App() {

  return (
    <div className='app' >
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    

    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
      <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cartview/>}/>
      <Route path="/thankyou/:idOrder" element={<ThankYou/>}/>
      <Route path="/contacto" element={<Formulario/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    
    </div>
  );
}

export default App;
