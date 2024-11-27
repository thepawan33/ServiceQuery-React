import ContactInfo from "./ContactInfo.jsx";
export default function ContFirst() {
  return (
    <div className="cont_first">
      <h1>Head Office</h1>
      <br></br>
      <br></br>
      <br></br>
      <ContactInfo
        h1={"SD"}
        city={"South Dakota"}
        ContNum={"+1-800-123-4567"}
        Address={"36/B W 1st Ave, Miller, SD 57362, USA"}
      />
      <br></br>
      <br></br>
    </div>
  );
}
