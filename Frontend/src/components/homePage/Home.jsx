import Button from "../form/Button";
import Form from "../form/Form";
import SecPage from "./SecPage/SecPage";
import "./Home.css";
export default function Home() {
  return (
    <div className="main-container">
      <div className="first-sec">
        <div className="first">
          <h1>When It Comes To Reliability, We Are The One You Need!</h1>
          <p>Fusce porta euismod magna, eu vehicula tellus feugiat ac.</p>
          <Button text={"Know More"} />
        </div>
        <div className="second">
          <Form />
        </div>
      </div>
      <div className="second-sec">
        <SecPage />
      </div>
    </div>
  );
}
