import SerHeader from "./header/SerHeader";
import SerMid from "./middle/SerMid";
import ServiceThird from "./third/ServiceThird";

export default function Service() {
  return (
    <div style={{ overflow: "auto" }}>
      <SerHeader h1={"Service"} />
      <SerMid />
      <ServiceThird />
    </div>
  );
}
