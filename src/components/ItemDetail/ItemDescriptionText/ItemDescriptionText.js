import "./ItemDescriptionText.css";
import { useParams } from "react-router-dom";
import db from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState, useEffect } from "react";

const ItemDescriptionText = () => {
  const [text, setText] = useState([]);
  const { id } = useParams();
  const getText = async () => {
    const docRef = doc(db, "Productos", id);
    const docSnapshot = await getDoc(docRef);
    let text = docSnapshot.data().description;
    return text;
  };
  useEffect(() => {
    getText().then((res) => {
      setText(res);
    });
  }, [id]);
  return (
    <>
      <ul className="ListDescriptionText">
        {text.map((text) => {
          return (
            <li className="Description">
              <ArrowRightIcon fontSize="large" />
              <p className="TextDescription">{text} </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ItemDescriptionText;
