import { useEffect, useState } from "react";
import "./ItemListContainer.css";

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebaseConfig";

export default function ItemListContainer() {
  const { categoryId, sectionId } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const getProducts = async () => {
    const productCollection = categoryId
      ? query(collection(db, "Productos"), where("category", "==", categoryId))
      : collection(db, "Productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productList;
  };
  const getProductsSection = async () => {
    const productCollection = sectionId
      ? query(collection(db, "Productos"), where("section", "==", sectionId))
      : collection(db, "Productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productList;
  };

  useEffect(() => {
    setLoader(true);
    if (!categoryId) {
      getProductsSection().then((res) => {
        setListProducts(res);
      });
    } else {
      getProducts().then((res) => {
        setListProducts(res);
      });
    }
    setLoader(false);
  }, [sectionId, categoryId]);
  return loader ? (
    <Loader />
  ) : (
    <div className="ItemListContainer">
      <ItemList dataProducts={listProducts} />
    </div>
  );
}
