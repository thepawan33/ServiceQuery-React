import { Link } from "react-router-dom";

export default function LogQueryLink({ adminMenu }) {
  const stye = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255,1)",
    zIndex: "999",
  };
  const anch = {
    textDecoration: "none",
    color: "black",
    marginTop: "1rem",
    fontSize: "1.5rem",
  };
  const closeButtonEvent = () => {
    adminMenu();
  };
  return (
    <div className="adminpanel" style={stye}>
      <h1 style={{ color: "black" }}>Only the admin is authorized.</h1>
      <a style={anch} href="/admin">
        Login
      </a>
      <Link onClick={closeButtonEvent} style={anch} to="/admin/query">
        Query
      </Link>
      <a style={anch}>
        <button onClick={closeButtonEvent}>Close</button>
      </a>
    </div>
  );
}
