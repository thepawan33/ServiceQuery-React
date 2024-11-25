import { api } from "../../../ReusableComponent/ApiConfig";

const clearInbox = async (alertMsg, setLoading, fetchQuery) => {
  try {
    setLoading(true);
    const confirmMsg = confirm("Do you want to continue?");
    if (!confirmMsg) {
      alertMsg("info", "Inbox clearing operation was canceled.");
      return;
    }
    const response = await api.delete("/query/delete/all");
    fetchQuery();
    alertMsg("success", `Inbox Clear Successfully!`);
  } catch (e) {
    console.error(e);
    alertMsg("error", `Failed! ${e.message}`);
  } finally {
    setLoading(false);
  }
};

const fetchQueries = async (setLoading, setQuery, alertMsg) => {
  setLoading(true);
  try {
    const response = await api.get("/query");
    if (response && response.data) {
      setQuery(response.data);
    } else {
      alertMsg("error", "data Not Found!");
    }
  } catch (e) {
    console.error(e);
    alertMsg("error", `Failed! ${e.message}`);
  } finally {
    setLoading(false);
  }
};

const getId = async (id, setSearch, setReadMessages, alertMsg) => {
  try {
    const response = await api.get(`/search/${id}`);
    if (response && response.data) {
      setSearch(response.data);
    } else {
      alertMsg("error", "data Not Found!");
    }
    setReadMessages((prv) => [...prv, id]);
  } catch (e) {
    console.error(e);
    alertMsg("error", `Failed! ${e.message}`);
  }
};

export { clearInbox, fetchQueries, getId };
