import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import products from "../../Utils/products.mock";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
export default function ItemListContainer() {
  const { categoryId, sectionId } = useParams();

  const [listProducts, setListProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const filterCategory = products.filter(
    (product) => product.category === categoryId
  );
  const filterSection = products.filter(
    (product) => product.section === sectionId
  );
  const getProducts = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoader(false);
        if (categoryId) {
          resolve(filterCategory);
        } else if (sectionId) {
          resolve(filterSection);
        } else {
          resolve(products);
        }
      }, 2000);
    });
  useEffect(() => {
    const ItemAwait = async () => {
      try {
        const res = await getProducts();
        setListProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    ItemAwait();
  }, [sectionId, categoryId]);
  return loader ? (
    <Loader />
  ) : (
    <div className="ItemListContainer">
      <ItemList dataProducts={listProducts} />
    </div>
  );
}
