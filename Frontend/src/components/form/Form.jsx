import { useState } from "react";
import Button from "./Button";
import "./Form.css";
import AlertComponent from "../ReusableComponent/Alert";
import { api } from "../ReusableComponent/ApiConfig";
import Loading from "../ReusableComponent/Loading";
import { useSelector, useDispatch } from "react-redux";
import { showAlert, hideAlert } from "../../app/slices/counterSlice";
import axios from "axios";

export default function Form() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    purpose: "",
    message: "",
  });
  let [loading, setLoading] = useState(false);

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  let handleInpData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  function alertMsg(msgType, message) {
    dispatch(
      showAlert({
        open: true,
        severity: msgType,
        message: message,
      })
    );
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}/query`,
        formData
      );
      if (response.status === 200) {
        alertMsg("success", "Query Send Successfully!");
      }
    } catch (e) {
      alertMsg("error", `Failed! ${e.message} `);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        contact: "",
        purpose: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AlertComponent
        open={alert.open}
        handleClose={() => dispatch(hideAlert())}
        severity={alert.severity}
        message={alert.message}
      />
      {loading && <Loading />}
      <h1>Request Callback</h1>
      <p>Please Complete this form</p>
      <input
        placeholder="Name"
        name="name"
        required
        value={formData.name}
        onChange={handleInpData}
      />
      <input
        placeholder="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleInpData}
      />
      <input
        placeholder="Contact"
        name="contact"
        type="number"
        required
        value={formData.contact}
        onChange={handleInpData}
      />
      <input
        placeholder="Purpose Of Contact"
        name="purpose"
        maxLength="48"
        required
        value={formData.purpose}
        onChange={handleInpData}
      />
      <textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleInpData}
        required
      ></textarea>
      <Button text={loading ? "Submitting..." : "Submit"} disabled={loading} />
    </form>
  );
}
