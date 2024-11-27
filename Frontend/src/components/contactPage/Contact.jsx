import SerHeader from "../servicePage/header/SerHeader";
import "./Contact.css";
import ContFirst from "./ContFirst.jsx";
import ContSec from "./ContSec.jsx";
export default function Contact() {
  return (
    <div className="contact" style={{ overflow: "auto" }}>
      <SerHeader h1={"Contact"} />
      <div className="contactInfo">
        <div className="cont_first1">
          <ContFirst />
          <img src="/assets/city.jpg" alt=" image" className="city" />
        </div>
        <div className="cont_seco2">
          <ContSec />
        </div>
      </div>
    </div>
  );
}
