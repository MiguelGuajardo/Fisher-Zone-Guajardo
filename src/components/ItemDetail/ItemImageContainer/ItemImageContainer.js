import "./ItemImageContainer.css";
const ItemImageContainer = ({ image }) => {
  return (
    <div className="ItemImageContainer">
      <div className="ItemImageMin">
        <img
          className="ImageDetailMin"
          src={`../../..${image}`}
          alt="Caña Lexus Chaiten"
        />
      </div>
      <div className="ItemImage">
        <img
          className="ImageDetail"
          src={`../../..${image}`}
          alt="Caña Lexus Chaiten"
        />
      </div>
    </div>
  );
};
export default ItemImageContainer;
