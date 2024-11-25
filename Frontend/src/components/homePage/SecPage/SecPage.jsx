import SecFirst from "../../ReusableComponent/QualityWork";
import SecSec from "./SecSec";
import "./SecPage.css";

export default function SecPage() {
  return (
    <div className="container">
      <div className="first">
        <SecFirst
          h="Quality Work Through Dedication"
          p="Aliquam suscipit felis a arcu laoreet congue. Habeo nemore appellantur
        eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu
        voluptaria. Aliquam suscipit felis a arcu laoreet congue. Usu putant
        adolescens consequuntur."
        />
      </div>
      <hr></hr>
      <div className="secend">
        <SecSec />
      </div>
    </div>
  );
}
