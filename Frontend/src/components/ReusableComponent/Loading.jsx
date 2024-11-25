import CircularProgress from "@mui/material/CircularProgress";
const style = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255,0.8)",
  zIndex: "999",
};
export default function Loading() {
  return (
    <div className="loading-overlay" style={style}>
      <CircularProgress />
    </div>
  );
}
