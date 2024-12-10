import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialMediaLinks = () => {

  return (
    <aside className="social-media-links">
      <ul>
        {/* <li onClick={() => window.open("https://www.facebook.com/", "_blank")}>
          <Tooltip title="Facebook" arrow>
            <FacebookIcon fontSize="medium" className="social-icon" />
          </Tooltip>
        </li> */}
        {/* <li onClick={() => window.open("https://www.twitter.com", "_blank")}>
          <Tooltip title="Twitter" arrow>
            <TwitterIcon fontSize="medium" className="social-icon" />
          </Tooltip>
        </li> */}
        <li onClick={() => window.open("https://www.linkedin.com/in/fabrice-randrianaivo", "_blank")}>
          <Tooltip title="LinkedIn" arrow>
            <LinkedInIcon fontSize="medium" className="social-icon" />
          </Tooltip>
        </li>
        <li onClick={() => window.open("https://github.com/FabriceRandrianaivo", "_blank")}>
          <Tooltip title="GitHub" arrow>
            <GitHubIcon fontSize="medium" className="social-icon" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Email" arrow>
            <a href="mailto:fabrice-randrianaivo8@gmail.com">
              <EmailIcon fontSize="medium" className="social-icon" />
            </a>
          </Tooltip>
        </li>
         {/* Lien WhatsApp */}
         <li>
          <Tooltip title="WhatsApp" arrow>
            <a href="https://wa.me/+261348454355" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon fontSize="medium" className="social-icon" />
            </a>
          </Tooltip>
        </li>
      </ul>
    </aside>
  );
};

export default SocialMediaLinks;
