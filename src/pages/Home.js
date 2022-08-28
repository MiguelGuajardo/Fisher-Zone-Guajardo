import Slider from "../components/Slider/Slider";
import "../App.css";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
      términos();
    });
  }, []);
  const términos = () => {
    Swal.fire({
      html: `<span>Por Favor acepte nuestros Términos y Condiciones</span`,
      confirmButtonText: `Acepto`,
      icon: `info`,
      padding: `1rem`,
      toast: true,
      position: `bottom`,
      allowEscapeKey: false,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      showCancelButton: false,
      showCloseButton: false,
      closeButtonAriaLabel: `Cerrar esta alerta`,
    });
  };
  return (
    <>
      <Slider />
      <h2>Todos nuestros productos</h2>
      <div className="productSlider">
        {productos.map((product) => {
          return (
            <div key={product.id}>
              <div className="itemProductSlide">
                <ItemProduct data={product} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
