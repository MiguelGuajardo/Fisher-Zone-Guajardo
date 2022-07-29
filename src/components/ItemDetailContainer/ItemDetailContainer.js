import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import products from "../../Utils/products.mock";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [productData, setProductData] = useState([]);
  const [ProductFilterId, setProductFilterId] = useState([]);

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  useEffect(() => {
    getProduct
      .then((res) => {
        //console.log("Productos: ", res);
        setProductData(res);
      })
      .catch((error) => {
        console.log("La llamada fallo");
      })
      .finally(() => {});
  }, []);
  useEffect(() => {
    productData.some((product) => {
      if (product.id == 1) {
        /*console.log("producto filtrado: ", product);*/
        setProductFilterId(product);
      }
    });
  });
  console.log("producto filtrado: ", ProductFilterId);
  return (
    <div>
      <ItemDetail data={ProductFilterId} />
    </div>
  );
}
