import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../Utils/products.mock";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const RenderItemDescriptionText = () => {
  const { id } = useParams();
  const [productFilterId, setProductFilterId] = useState([]);
  useEffect(() => {
    filterById();
  }, [id]);
  const filterById = () => {
    products.filter((product) => {
      if (product.id == id) {
        setProductFilterId(product.description);
      }
    });
  };
  console.log("Filter Id", productFilterId);
  return (
    <>
      {productFilterId.map(function (product) {
        return (
          <li className="Description">
            <ArrowRightIcon fontSize="large" />
            <p className="TextDescription">{product} </p>
          </li>
        );
      })}
    </>
  );
};
export default RenderItemDescriptionText;
