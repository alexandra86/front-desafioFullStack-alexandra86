import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import { StyleCardContact } from "./style.js";

export const CardContact = ({ elem }) => {
  const { removeContact } = useContext(ContactContext);
  return (
    <StyleCardContact key={elem.id}>
      <h3 className="technology">{elem.name}</h3>
      <div className="areaCourse">
        <p className="nivelCourse">{elem.phone}</p>
        <button className="btEdit"></button>
        <button
          type="button"
          className="btDelete"
          onClick={() => removeContact(elem.id)}
        ></button>
      </div>
    </StyleCardContact>
  );
};
