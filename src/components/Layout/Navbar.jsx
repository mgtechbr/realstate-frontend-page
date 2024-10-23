import { useEffect, useRef, useState } from "react";
import styles from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header} ref={navbarRef}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <NavLink to={"/"} className={styles.navbarLink}>
            {/* <img src="" alt="Logo" height={100} width={100} loading="lazy" /> */}
            Imobiliária
          </NavLink>
        </div>
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul
          className={`${styles.navbarLinks} ${
            menuOpen && window.innerWidth <= 768 ? styles.show : ""
          }`}
        >
          <li>
            <NavLink
              className={styles.navbarLink}
              to={"/"}
              activeClassName="active"
              title="Início"
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navbarLink}
              to={"/propriedades"}
              activeClassName="active"
              title="Propriedades"
            >
              Propriedades
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navbarLink}
              to={"/contato"}
              activeClassName="active"
              title="Entre em contato"
            >
              Entre em contato
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navbarLink}
              to={"/visita"}
              activeClassName="active"
              title="Marque uma visita"
            >
              Marque uma visita
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
