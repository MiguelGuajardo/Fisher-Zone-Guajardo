import "./ItemImageContainer.css";
const ItemImageContainer = ({ image, name }) => {
  return (
    <div className="ItemImageContainer">
      <div className="ItemImageMin">
        <img className="ImageDetailMin" src={`/assets/${image}`} alt={name} />
        <img className="ImageDetailMin" src={`/assets/${image}`} alt={name} />
        <img className="ImageDetailMin" src={`/assets/${image}`} alt={name} />
      </div>
      <div className="ItemImage">
        <img className="ImageDetail" src={`/assets/${image}`} alt={name} />
      </div>
    </div>
  );
};
export default ItemImageContainer;
