import "./Loader.css";
import Spinner from "../../img/spinner.gif";
const Loader = () => {
  return (
    <div className="spinnerContainer">
      <img src={Spinner} alt="" />
    </div>
  );
};
export default Loader;
