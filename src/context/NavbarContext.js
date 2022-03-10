import { createContext, useState, useEffect } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [data, setData] = useState("");

  async function retrieveData() {
    const settings = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const fetchResponse = await fetch("data.json", settings);
    const foundData = await fetchResponse.json();
    setData(foundData);
  }

  useEffect(() => {
    retrieveData();
  }, []);

  function controlNav() {
    navOpen === false ? setNavOpen(true) : setNavOpen(false);
  }

  return (
    <NavbarContext.Provider value={{ navOpen, controlNav, data }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
