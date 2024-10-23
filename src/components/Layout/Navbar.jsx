import { useEffect, useRef, useState } from "react";
import styles from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import SubHeader from "./SubHeader";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const navbarRef = useRef();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  const className =
    scroll > 110
      ? `${styles.header} ${styles.headerScrolled}`
      : `${styles.header}`;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <SubHeader />
      <header className={className} ref={navbarRef}>
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
            role="button"
            aria-expanded="false"
            aria-controls="menu"
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
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbarLink} ${styles.active}`
                    : styles.navbarLink
                }
                to="/"
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbarLink} ${styles.active}`
                    : styles.navbarLink
                }
                to="/propriedades"
              >
                Propriedades
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbarLink} ${styles.active}`
                    : styles.navbarLink
                }
                to="/contato"
              >
                Entre em contato
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbarLink} ${styles.active}`
                    : styles.navbarLink
                }
                to="/visita"
              >
                Marque uma visita
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
