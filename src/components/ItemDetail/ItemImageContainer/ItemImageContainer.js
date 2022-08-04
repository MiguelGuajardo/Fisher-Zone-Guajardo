import "./ItemImageContainer.css";
const ItemImageContainer = ({ image, name }) => {
  return (
    <div className="ItemImageContainer">
      <div className="ItemImageMin">
        <img className="ImageDetailMin" src={`../../..${image}`} alt={name} />
        <img className="ImageDetailMin" src={`../../..${image}`} alt={name} />
        <img className="ImageDetailMin" src={`../../..${image}`} alt={name} />
      </div>
      <div className="ItemImage">
        <img className="ImageDetail" src={`../../..${image}`} alt={name} />
      </div>
    </div>
  );
};
export default ItemImageContainer;
