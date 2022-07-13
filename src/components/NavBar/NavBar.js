import "./NavBar.css";
import TopBar from "./TopBar/TopBar";
import NavbarContainer from "./NavBarContainer/NavBarContainer";
import NavBarList from "./NavBarList/NavBarList";

export default function Navbar() {
  return (
    <header className="headerContainer">
      <TopBar />
      <NavbarContainer />
      <NavBarList />
    </header>
  );
}
