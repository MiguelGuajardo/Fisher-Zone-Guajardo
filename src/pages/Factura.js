import FacturaContent from "../components/Factura/FacturaContent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Factura = () => {
  const { idOrden } = useParams();
  const [productData, setProductData] = useState();

  const getProduct = async () => {
    const docRef = doc(db, "Ordenes", idOrden);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    return product;
  };
  useEffect(() => {
    getProduct().then((res) => {
      setProductData(res);
    });
  }, [idOrden]);

  console.log(productData);
  return (
    <div className="invoiceContainer">
      {productData && <FacturaContent idParam={idOrden} data={productData} />}
    </div>
  );
};
export default Factura;
