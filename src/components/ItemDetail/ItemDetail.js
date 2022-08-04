import "./ItemDetail.css";
import ItemImageContainer from "./ItemImageContainer/ItemImageContainer";
import ItemDescription from "./ItemDescription/ItemDescription";
import ItemDescriptionText from "./ItemDescriptionText/ItemDescriptionText";
const ItemDetail = ({ data }) => {
  const { name, image, price, stock } = data;
  return (
    <div className="ItemContainer">
      <div className="ItemDetail">
        <ItemImageContainer name={name} image={image} />
        <div className="ItemDescription">
          <ItemDescription name={name} price={price} stock={stock} />
        </div>
      </div>
      <div className="ItemDescriptionText">
        <ItemDescriptionText />
      </div>
    </div>
  );
};
export default ItemDetail;
