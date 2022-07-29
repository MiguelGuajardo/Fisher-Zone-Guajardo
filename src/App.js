import "./App.css";
import NavBar from "./components/NavBar/NavBar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import SectionCategory from "./components/SectionCategory/SectionCategory";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {
        //<div className="Sections">
        //<SectionCategory />
        //<div className="SectionItemListContainer">
        //  <ItemListContainer />
        //</div>
        //</div>
      }
      <ItemDetailContainer />
    </div>
  );
}

export default App;
