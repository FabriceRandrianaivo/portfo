import { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom";

interface headerType {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

const TopHeader = (props: headerType) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(props.theme);
  const navigate = useNavigate();
  const isHome = location.pathname.startsWith("/home");
  useEffect(() => {
    setIsDarkTheme(props.theme);
  }, [props.theme]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    props.setTheme(newTheme);
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li onClick={()=> navigate("/")} className={isHome ? "active": ""}><HomeIcon fontSize="medium" className="navIcons"/></li>
          <li onClick={()=> navigate("/about")}><InfoIcon fontSize="medium"className="navIcons"/></li>
          <li onClick={()=> navigate("/project")}><AccountTreeIcon fontSize="medium" className="navIcons"/></li>
          <li onClick={()=> navigate("/contact")}><PermContactCalendarIcon fontSize="medium" className="navIcons"/></li>
          <li onClick={toggleTheme} >{isDarkTheme? <LightModeIcon cursor="pointer"/>: <Brightness4Icon cursor="pointer"/>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default TopHeader;
