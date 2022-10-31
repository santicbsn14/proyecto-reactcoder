import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemlistContainer/ItemListContainer';
function App() {

  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer/>

      </header>
    </div>
  );
}

export default App;
