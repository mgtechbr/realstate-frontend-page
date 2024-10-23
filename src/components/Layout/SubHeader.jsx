import styles from "./styles/SubHeader.module.css";
import { FaMap, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function SubHeader() {
  return (
    <div className={styles.subHeaderContainer}>
      <div className={styles.subHeaderRow}>
        <div className={styles.subHeaderInfo}>
          <ul>
            <li>
              <IoIosMail
                size={28}
                color="var(--main-color)"
              />{" "}
              exemplo@gmail.com
            </li>
            <li>
              <FaMap
                size={24}
                color="var(--main-color)"
              />{" "}
              Floresta Joinville, SC
            </li>
          </ul>
        </div>
        <div className={styles.subHeaderSocial}>
          <ul>
            <li>
              <a href="https://x.com/minthu" target="_blank">
                <FaFacebook size={15} color="white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size={15} color="white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram size={15} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
