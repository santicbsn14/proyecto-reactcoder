import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemlistContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetail/Itemdetailcontainer';
import {CartContextProvider} from './componentes/Context/CartContext'
function App() {

  return (
    <div className='app'>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
      <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
      <Route path="*" element={<h1>404:Esta pagina no existe</h1>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    
    </div>
  );
}

export default App;
