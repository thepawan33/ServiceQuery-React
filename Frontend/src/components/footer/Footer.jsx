import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <img src="/assets/logo.png" alt="logo" />
        <p>
          Aliquam suscipit felis a arcu laoreet congue. Habeo nemore
          appellanturusu putant adolescens conse quuntur ei, mel tempor
          consulatu voluptaria.
        </p>
        <div className="link">
          <FacebookOutlinedIcon />
          <TwitterIcon style={{ marginLeft: "0.8rem" }} />
          <InstagramIcon style={{ marginLeft: "0.8rem" }} />
          <GoogleIcon style={{ marginLeft: "0.8rem" }} />
          <LinkedInIcon style={{ marginLeft: "0.8rem" }} />
        </div>
      </div>
      <div className="cpoyright">Copyright © 2024 Electrician</div>
      <div className="powered">Powered by Electrician</div>
    </div>
  );
}
