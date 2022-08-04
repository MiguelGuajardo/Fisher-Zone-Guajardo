import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import products from "../../Utils/products.mock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [productData, setProductData] = useState([]);
  const [ProductFilterId, setProductFilterId] = useState([]);

  const { id } = useParams();
  const getProduct = new Promise((resolve, reject) => {
    resolve(products);
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
    FilterById();
  });
  console.log("producto filtrado: ", ProductFilterId);
  const FilterById = () => {
    productData.some((product) => {
      if (product.id == id) {
        /*console.log("producto filtrado: ", product);*/
        setProductFilterId(product);
      }
    });
  };
  return (
    <div>
      {ProductFilterId ? (
        <ItemDetail data={ProductFilterId}></ItemDetail>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
