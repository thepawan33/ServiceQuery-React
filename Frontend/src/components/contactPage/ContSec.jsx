import ContactInfo from "./ContactInfo";

export default function ContSec() {
  return (
    <div className="ContSec">
      <h1>Regional Offices</h1>
      <br />
      <br />
      <br />
      <ContactInfo
        h1={"MT"}
        city={"Montana"}
        ContNum={"+1-800-123-4567"}
        Address={"19-A/2 3rd Ave, Grey Park, MT 57362, USA"}
      />
      <br />
      <br />
      <br />

      <ContactInfo
        h1={"ND"}
        city={"North Dakota"}
        ContNum={"+1-800-123-4567"}
        Address={"24/C W 2nd Ave, James Rd, ND 12345, USA"}
      />
    </div>
  );
}
