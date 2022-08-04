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
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <button className="icon iconInstagram">
            <InstagramIcon className="Instagram" fontSize="large" />
          </button>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <button className="icon iconTwitter">
            <TwitterIcon fontSize="large" />
          </button>
        </a>
        <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
          <button className="icon iconWhatSapp">
            <WhatsAppIcon fontSize="large" />
          </button>
        </a>
        <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer">
          <button className="icon iconFacebook">
            <FacebookIcon fontSize="large" />
          </button>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <button className="icon iconGitHub">
            <GitHubIcon fontSize="large" />
          </button>
        </a>
      </div>
    </div>
  );
}
