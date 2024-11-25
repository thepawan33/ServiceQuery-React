import { useEffect, useState } from "react";
import SinQuery from "./SinQuery";
import "./Query.css";
import SearchQuery from "./SearchQuery";
import CloseIcon from "@mui/icons-material/Close";
import AlertComponent from "../../../ReusableComponent/Alert";
import Loading from "../../../ReusableComponent/Loading";
import { showAlert, hideAlert } from "../../../../app/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { clearInbox, fetchQueries, getId } from "./apiRequest";

export default function Query() {
  let [query, setQuery] = useState(null);
  let [search, setSearch] = useState(null);
  let [loading, setLoading] = useState(false);
  let [readMessages, setReadMessages] = useState([]);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const fetchQuery = () => {
    fetchQueries(setLoading, setQuery, alertMsg);
  };

  useEffect(() => {
    fetchQuery();
  }, []);

  const alertMsg = (msgType, message) => {
    dispatch(
      showAlert({
        open: true,
        severity: msgType,
        message: message,
      })
    );
  };

  const updateState = (search) => {
    setSearch(search);
    alertMsg("success", "Success! Query has been successfully deleted.");
  };

  return (
    <div className={query ? "email-container" : "setNull"}>
      <AlertComponent
        open={alert.open}
        message={alert.message}
        severity={alert.severity}
        handleClose={() => dispatch(hideAlert())}
      />
      {loading && <Loading />}
      <input type="checkbox" id="check" />
      <div className="allEmail">
        <p
          style={!query ? { display: "none" } : {}}
          className="clr-btn"
          onClick={() => clearInbox(alertMsg, setLoading, fetchQuery)}
        >
          Clear Inbox
        </p>
        {query &&
          query.map((el) => {
            return (
              <div
                key={el._id}
                onClick={() =>
                  getId(el._id, setSearch, setReadMessages, alertMsg)
                }
              >
                <label htmlFor="check">
                  <SinQuery
                    name={el.name}
                    purpose={el.purpose}
                    email={el.email}
                    date={el.createdAt}
                    read={el.read}
                    readMessages={readMessages.some((arr) => arr === el._id)}
                  />
                </label>
              </div>
            );
          })}
      </div>
      <div className="emailBox" style={!query ? { display: "none" } : {}}>
        <label htmlFor="check" className="closeButton">
          <CloseIcon />
        </label>
        {search && (
          <>
            <SearchQuery
              search={search}
              fetchQueries={() => fetchQuery()}
              updateState={updateState}
            />
          </>
        )}
      </div>
    </div>
  );
}
