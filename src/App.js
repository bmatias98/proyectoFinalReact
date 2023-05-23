import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
}

export default App;
