import { useState } from "react";
import Button from "../../form/Button";
import "./Login.css";
import { logQueryApi } from "../../../utils/logQueryApi";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../ReusableComponent/Alert";
import Loading from "../../ReusableComponent/Loading";
import { showAlert, hideAlert } from "../../../app/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  let [loading, setLoading] = useState(false);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInpData(e) {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  }
  function alertMsg(msgType, message) {
    dispatch(
      showAlert({
        open: true,
        severity: msgType,
        message: message,
      })
    );
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await logQueryApi.post("/admin/login", formData);
      if (response && response.data) {
        sessionStorage.setItem("token", response.data.accessToken);
        alertMsg("success", "login  successful!");
        navigate("/admin/query");
      }
    } catch (error) {
      alertMsg("error", `API call failed! ${error.message}`);
    } finally {
      setLoading(false);
      setFormData((old) => {
        return { ...old, username: "", password: "" };
      });
    }
  }

  return (
    <div className="login">
      <AlertComponent
        open={alert.open}
        handleClose={() => dispatch(hideAlert())}
        severity={alert.severity}
        message={alert.message}
      />
      {loading && <Loading />}
      <form className="login-form" onSubmit={handleSubmit}>
        <h1> Login</h1>
        <p>
          <b>Admin authorization required for logging in</b>
        </p>
        <input
          placeholder="Email"
          name="username"
          required
          value={formData.username}
          onChange={handleInpData}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleInpData}
        />
        <Button text={loading ? "Submit.." : "Submit"} disabled={loading} />
      </form>
    </div>
  );
}
