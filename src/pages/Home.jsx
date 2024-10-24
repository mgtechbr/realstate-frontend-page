import Slider from "../components/Especific/BannerSlider";
import Featured from "../components/Especific/Featured";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Slider />
      <Featured />
    </div>
  );
};

export default Home;
