import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import products from "../../Utils/products.mock";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  useEffect(() => {
    getProducts
      .then((res) => {
        //console.log("Productos: ", res);
        setListProducts(res);
      })
      .catch((error) => {
        console.log("La llamada fallo");
      })
      .finally(() => {});
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList dataProducts={listProducts} />
    </div>
  );
}
