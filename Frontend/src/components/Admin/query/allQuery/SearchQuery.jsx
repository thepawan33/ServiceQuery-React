import "./SearchQuery.css";
import { useState } from "react";
import AlertComponent from "../../../ReusableComponent/Alert";
import { DateFormater } from "../../../ReusableComponent/DeteFromater";
import { api } from "../../../ReusableComponent/ApiConfig";
import Loading from "../../../ReusableComponent/Loading";
import { useSelector, useDispatch } from "react-redux";
import { showAlert, hideAlert } from "../../../../app/slices/counterSlice";

export default function SearchQuery({ search, fetchQueries, updateState }) {
  let [loading, setLoading] = useState(false);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  async function DeleteQuery(id) {
    setLoading(true);
    try {
      const response = await api.delete(`/query/delete/${id}`);
      fetchQueries(), updateState(null);
    } catch (e) {
      dispatch(
        showAlert({
          open: true,
          severity: "error",
          message: `Success! ${e.message}`,
        })
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="singleData-page">
      <AlertComponent
        open={alert.open}
        message={alert.message}
        severity={alert.severity}
        handleClose={() => dispatch(hideAlert())}
      />
      {loading && <Loading />}
      <h3>Name : {search.name}</h3>
      <h3>Email : {search.email}</h3>
      <h3>Contact : {search.contact}</h3>
      <h4>purpose : {search.purpose}</h4>
      <br></br>
      <span style={{ fontSize: "1rem" }}>{DateFormater(search.createdAt)}</span>
      <br></br>
      <br></br>
      <div className="msg">
        <span> {search.message}</span>
      </div>
      <br />
      <br />
      <button
        className="del-btn"
        disabled={loading}
        onClick={() => DeleteQuery(search._id)}
      >
        {loading ? "Delete.." : "Delete"}
      </button>
    </div>
  );
}
