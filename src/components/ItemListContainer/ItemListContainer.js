import "./ItemListContainer.css";
import ItemProduct from "../ItemProduct/ItemProduct";
import CañaLexusChaiten from "../../img/CañaLexusChaiten.jpg";
import CañaSpinitRainForestII from "../../img/CañaSpinitRainForestII.jpg";
import CañaSaintCarbonTech from "../../img/CañaSaintCarbonTech.png";
import CañaWaterdogBlackGFeeder from "../../img/CañaWaterdogBlackGFeeder.jpg";
export default function ItemListContainer() {
  const product1 = {
    id: 1,
    name: "Caña Lexus Chaiten",
    image: CañaLexusChaiten,
    price: 15000,
    stock: 10,
  };
  const product2 = {
    id: 2,
    name: "Caña Spinit Rain Forest II",
    image: CañaSpinitRainForestII,
    price: 9960,
    stock: 5,
  };
  const product3 = {
    id: 3,
    name: "Caña Saint Carbon Tech",
    image: CañaSaintCarbonTech,
    price: 15000,
    stock: 6,
  };
  const product4 = {
    id: 4,
    name: "Caña Waterdog Black G Feeder",
    image: CañaWaterdogBlackGFeeder,
    price: 19500,
    stock: 3,
  };
  return (
    <div className="ItemListContainer">
      <ItemProduct data={product1} />
      <ItemProduct data={product2} />
      <ItemProduct data={product3} />
      <ItemProduct data={product4} />
    </div>
  );
}
