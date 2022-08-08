import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../Utils/products.mock";
import RenderItemDescription from "./RenderItemDescription/RenderItemDescription";

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
  return (
    <>
      {productFilterId.map((product, index) => {
        return <RenderItemDescription key={index} data={product} />;
      })}
    </>
  );
};
export default RenderItemDescriptionText;
