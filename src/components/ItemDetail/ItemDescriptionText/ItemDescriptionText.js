import "./ItemDescriptionText.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ItemDescriptionText = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className="ListDescriptionText">
        <li className="Description">
          <ArrowRightIcon fontSize="large" />
          <p className="TextDescription">{data} </p>
        </li>
      </ul>
    </>
  );
};
export default ItemDescriptionText;
