import ImgMediaCard from "./card";
import "./ServiceThird.css";

export default function ServiceThird() {
  return (
    <div className="third-service">
      <ImgMediaCard
        src={"/assets/card1.png"}
        h5={"Lighting Upgrades"}
        p={
          "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria"
        }
      />
      <ImgMediaCard
        src={"/assets/card2.png"}
        h5={"Install A Ceiling Fan"}
        p={
          "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria"
        }
      />
      <ImgMediaCard
        src={"/assets/card3.png"}
        h5={"Backup Generators"}
        p={
          "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria"
        }
      />
      <ImgMediaCard
        src={"/assets/card4.png"}
        h5={"Wiring Upgrades"}
        p={
          "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria"
        }
      />
      <ImgMediaCard
        src={"/assets/card5.png"}
        h5={"LED Lighting"}
        p={
          "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria"
        }
      />
      <ImgMediaCard
        src={"/assets/card6.png"}
        h5={"Insurance Inspections"}
        p={
          "Habeo nemore appellantur eu usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria"
        }
      />
    </div>
  );
}
