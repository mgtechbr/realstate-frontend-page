import { useState } from "react";
import styles from "./styles/Featured.module.css";
import featuredImage from "../../assets/images/featured.webp";
import icon1 from "../../assets/images/info-icon1.webp";
import icon2 from "../../assets/images/info-icon2.webp";
import icon3 from "../../assets/images/info-icon3.webp";
import icon4 from "../../assets/images/info-icon4.webp";

const Featured = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className={styles.featuredSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg4}>
            <div className={styles.leftImage}>
              <img src={featuredImage} alt="" />
            </div>
          </div>
          <div className={styles.colLg5}>
            <div className={styles.sectionHeading}>
              <h6>| Destaque</h6>
              <h2>Melhores imovéis &amp; Favoritos</h2>
            </div>
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdownItem}>
                <button
                  onClick={() => toggleDropdown(1)}
                  className={`${styles.dropdownButton} ${
                    activeDropdown === 1 ? styles.active : ""
                  }`}
                >
                  Sobre nossas propriedades
                </button>
                <div
                  className={`${styles.dropdownContent} ${
                    activeDropdown === 1 ? styles.open : ""
                  }`}
                >
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing
                  elit, sed doesn&apos;t eiusmod tempor incididunt ut labore
                  consectetur elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <button
                  onClick={() => toggleDropdown(2)}
                  className={`${styles.dropdownButton} ${
                    activeDropdown === 2 ? styles.active : ""
                  }`}
                >
                  Como trabalhamos?
                </button>
                <div
                  className={`${styles.dropdownContent} ${
                    activeDropdown === 2 ? styles.open : ""
                  }`}
                >
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing
                  elit, sed doesn&apos;t eiusmod tempor incididunt ut labore
                  consectetur elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </div>
              </div>
              <div className={styles.dropdownItem}>
                <button
                  onClick={() => toggleDropdown(3)}
                  className={`${styles.dropdownButton} ${
                    activeDropdown === 3 ? styles.active : ""
                  }`}
                >
                  Por que nós somos destaque?
                </button>
                <div
                  className={`${styles.dropdownContent} ${
                    activeDropdown === 3 ? styles.open : ""
                  }`}
                >
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing
                  elit, sed doesn&apos;t eiusmod tempor incididunt ut labore
                  consectetur elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.colLg3}>
            <div className={styles.infoTable}>
              <ul>
                <li>
                  <img width={60} height={60} src={icon3} alt="" />
                  <h4>
                    250 m2
                    <br />
                    <span>Total Flat Space</span>
                  </h4>
                </li>
                <li>
                  <img width={60} height={60} src={icon1} alt="" />
                  <h4>
                    Contract
                    <br />
                    <span>Contract Ready</span>
                  </h4>
                </li>
                <li>
                  <img width={60} height={60} src={icon2} alt="" />
                  <h4>
                    Payment
                    <br />
                    <span>Payment Process</span>
                  </h4>
                </li>
                <li>
                  <img width={60} height={60} src={icon4} alt="" />
                  <h4>
                    Safety
                    <br />
                    <span>24/7 Under Control</span>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
