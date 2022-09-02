import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    const docRef = doc(db, "Productos", id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    return product;
  };
  useEffect(() => {
    getProduct().then((res) => {
      setProductData(res);
    });
  }, [id]);
  return (
    <div>
      <ItemDetail data={productData}></ItemDetail>
    </div>
  );
}
