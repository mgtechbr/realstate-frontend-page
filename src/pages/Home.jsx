import Slider from "../components/Especific/BannerSlider";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Slider />
    </div>
  );
};

export default Home;
