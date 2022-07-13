import "./TopBar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function TopBar() {
  return (
    <div className="TopBar">
      <div className="icons">
        <button className="icon iconInstagram">
          <InstagramIcon className="Instagram" fontSize="large" />
        </button>
        <button className="icon iconTwitter">
          <TwitterIcon fontSize="large" />
        </button>
        <button className="icon iconWhatSapp">
          <WhatsAppIcon fontSize="large" />
        </button>
        <button className="icon iconFacebook">
          <FacebookIcon fontSize="large" />
        </button>
        <button className="icon iconGitHub">
          <GitHubIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
