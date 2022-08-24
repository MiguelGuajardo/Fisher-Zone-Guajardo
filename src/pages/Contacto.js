import { useEffect, useState } from "react";
import Contact from "../components/Contact/Contact";
import db from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import PersonIcon from "@mui/icons-material/Person";

const Contacto = () => {
  const [listMessages, setListMessages] = useState([]);

  const getMessage = async () => {
    const messageCollection = collection(db, "Mensajes");
    const messageSnapshot = await getDocs(messageCollection);
    const messageList = messageSnapshot.docs.map((doc) => {
      let message = doc.data();
      return message;
    });
    return messageList;
  };
  useEffect(() => {
    getMessage().then((res) => {
      setListMessages(res);
    });
  }, []);
  return (
    <>
      <div className="Sections contactContainer">
        <Contact />
      </div>
      <div className="questionContainer">
        <h2>Ultimas Preguntas</h2>
        <div className="questionList">
          {listMessages.map((message) => {
            return (
              <div className="questionItem">
                <div>
                  <PersonIcon />
                </div>
                <div>{message.mensajeUser.mensaje} </div>
                <div>{message.date} </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Contacto;
