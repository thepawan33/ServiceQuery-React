export default function ContactInfo({ h1, city, ContNum, Address }) {
  return (
    <>
      <h1 style={{ borderBottom: "2px solid black", width: "50%" }}>{h1}</h1>

      <br></br>
      <h3>{city}</h3>
      <br></br>
      <h3>{ContNum}</h3>
      <br></br>
      <h3>{Address}</h3>
    </>
  );
}
