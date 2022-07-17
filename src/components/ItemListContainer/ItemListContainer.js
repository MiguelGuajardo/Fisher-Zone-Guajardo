import "./ItemListContainer.css";
import ItemProduct from "../ItemProduct/ItemProduct";
import CañaLexusChaiten from "../../img/CañaLexusChaiten.jpg";
import CañaSpinitRainForestII from "../../img/CañaSpinitRainForestII.jpg";
import CañaSaintCarbonTech from "../../img/CañaSaintCarbonTech.png";
import CañaWaterdogBlackGFeeder from "../../img/CañaWaterdogBlackGFeeder.jpg";
export default function ItemListContainer() {
  return (
    <div className="ItemListContainer">
      <ItemProduct
        name="Caña Lexus Chaiten"
        image={CañaLexusChaiten}
        price={15000}
      />
      <ItemProduct
        name="Caña Spinit Rain Forest II"
        image={CañaSpinitRainForestII}
        price={9960}
      />
      <ItemProduct
        name="Caña Saint Carbon Tech"
        image={CañaSaintCarbonTech}
        price={17250}
      />
      <ItemProduct
        name="Caña Waterdog Black G Feeder"
        image={CañaWaterdogBlackGFeeder}
        price={19500}
      />
    </div>
  );
}
