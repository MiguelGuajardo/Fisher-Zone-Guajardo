import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import SectionCategory from "./components/SectionCategory/SectionCategory";
import SectionDescription from "./components/SectionDescription/SectionDescription";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Sections">
        <SectionCategory />
        <div className="SectionItemListContainer">
          <ItemListContainer />
        </div>
        <div className="SectionDescription">
          <SectionDescription />
        </div>
      </div>
    </div>
  );
}

export default App;
