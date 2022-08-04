import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import SectionCategory from "../components/SectionCategory/SectionCategory";
const Pesca = () => {
  return (
    <div className="Sections">
      <SectionCategory />
      <div className="SectionItemListContainer">
        <ItemListContainer />
      </div>
    </div>
  );
};
export default Pesca;
