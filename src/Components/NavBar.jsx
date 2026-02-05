import AfterLoginNavBar from "./AfterLoginNavBar";
import BeforeLoginNavBar from "./BeforeLoginNavBar";

const NavBar = ({ isLoggedIn, user, darkMode, setDarkMode }) => {
  return isLoggedIn ? (
    <AfterLoginNavBar
      user={user}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  ) : (
    <BeforeLoginNavBar
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
};

export default NavBar;
