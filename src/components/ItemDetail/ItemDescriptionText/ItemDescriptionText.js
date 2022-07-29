import "./ItemDescriptionText.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const ItemDescriptionText = () => {
  return (
    <>
      <ul className="ListDescriptionText">
        <li className="Description">
          <ArrowRightIcon fontSize="large" />
          <p className="TextDescription">Material : Grafito de alto módulo</p>
        </li>
        <li className="Description">
          <ArrowRightIcon fontSize="large" />
          <p className="TextDescription">Tramos : 2</p>
        </li>
        <li className="Description">
          <ArrowRightIcon fontSize="large" />
          <p className="TextDescription">Mango : corcho</p>
        </li>
        <li className="Description">
          <ArrowRightIcon fontSize="large" />
          <p className="TextDescription">Pasahilos livianos de 1 pata.</p>
        </li>
        <li className="Description">
          <ArrowRightIcon fontSize="large" />
          <p className="TextDescription">
            Caña ideal para la pesca de pejerrey y lenguado. También pesca de
            truchas.
          </p>
        </li>
      </ul>
    </>
  );
};
export default ItemDescriptionText;
