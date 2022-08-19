import Slider from "../components/Slider/Slider";
import "../App.css";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";
import { useEffect, useState } from "react";

const Home = () => {
  const [productos, setProductos] = useState([]);

  const getProducts = async () => {
    const productCollection = collection(db, "Productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };
  useEffect(() => {
    getProducts().then((res) => {
      setProductos(res);
    });
  }, []);
  return (
    <>
      <Slider />
      <h2>Todos nuestros productos</h2>
      <div className="productSlider">
        {productos.map((product) => {
          return (
            <>
              <div className="itemProductSlide">
                <ItemProduct key={product.id} data={product} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Home;
