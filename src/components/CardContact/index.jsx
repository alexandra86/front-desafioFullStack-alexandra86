import { StyleCardContact } from "./style.js";
import moment from "moment";

export const CardContact = ({ elem }) => {
  const currentDateTime = new Date(elem.registerDate);
  const convertedDateTime = moment(currentDateTime).utcOffset("+03:00");
  const formattedDate = convertedDateTime.format("DD/MM/YYYY");
  const formattedTime = convertedDateTime.format("HH:mm:ss");
  return (
    <StyleCardContact key={elem.id}>
      <div className="areaClient">
        <h3 className="nivelCourse">
          <span className="identification">Name:</span> {elem.fullName}
        </h3>
        <p className="nivelCourse">
          <span className="identification">E-mail:</span> {elem.email}
        </p>
        <p className="nivelCourse">
          <span className="identification">Phone:</span> {elem.phone}
        </p>
        <p className="registerDate">Register Date:</p>
        <div className="areaDate">
          <p className="nivelCourse">
            <span className="identification">Date:</span> {formattedDate}
          </p>
          <p className="nivelCourse">
            <span className="identification">Hour:</span> {formattedTime}
          </p>
        </div>
      </div>
      <div className="areabuttons">
        <button className="btEdit"></button>
        <button type="button" className="btDelete"></button>
      </div>
    </StyleCardContact>
  );
};
