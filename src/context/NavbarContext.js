import { createContext, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  function ActiveLink({ children, to, ...props }) {}

  function controlNav() {
    navOpen === false ? setNavOpen(true) : setNavOpen(false);
  }

  return (
    <NavbarContext.Provider value={{ navOpen, controlNav }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
