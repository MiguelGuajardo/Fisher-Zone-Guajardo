import Slider from "../components/Slider/Slider";
import "../App.css";
import products from "../Utils/products.mock";
import ItemProduct from "../components/ItemProduct/ItemProduct";

const Home = () => {
  return (
    <>
      <Slider />
      <h2>Todos nuestros productos</h2>
      <div className="productSlider">
        {products.map((product) => {
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
