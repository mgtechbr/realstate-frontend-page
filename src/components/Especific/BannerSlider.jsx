import { useState, useRef } from "react";
import styles from "./styles/BannerSlider.module.css";

const slides = [
  {
    id: 1,
    city: "Joinville",
    state: "Santa Catarina",
    title: "Eiii! Escolha a melhor casa para você",
    image: "src/assets/images/banner-1.webp",
  },
  {
    id: 2,
    city: "Balneario Camboriu",
    state: "Santa Catarina",
    title: "Compre agora! Melhor casa na cidade",
    image: "src/assets/images/banner-2.webp",
  },
  {
    id: 3,
    city: "Itapema",
    state: "Santa Catarina",
    title: "Act Now! Get the highest level penthouse",
    image: "src/assets/images/banner-3.webp",
  },
];

// Create a new array with duplicated slides
const infiniteSlides = [
  { ...slides[slides.length - 1], id: slides.length + 1 }, // Last slide with a new id
  ...slides.map((slide) => ({ ...slide })), // Original slides with their original ids
  { ...slides[0], id: slides.length + 2 }, // First slide with a new id
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first slide in the infinite array
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const slidesLength = infiniteSlides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesLength - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    currentTranslate.current = e.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (currentTranslate.current < -50) {
      nextSlide();
    } else if (currentTranslate.current > 50) {
      prevSlide();
    }

    currentTranslate.current = 0;
  };

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    currentTranslate.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (currentTranslate.current < -50) {
      nextSlide();
    } else if (currentTranslate.current > 50) {
      prevSlide();
    }

    currentTranslate.current = 0;
  };

  // Reset index when transitioning past the first or last duplicate
  if (currentIndex === 0) {
    setCurrentIndex(slidesLength - 2); // Set to the second last slide
  } else if (currentIndex === slidesLength - 1) {
    setCurrentIndex(1); // Set to the first slide
  }

  return (
    <div
      className={styles.mainBanner}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {infiniteSlides.map((slide) => (
          <div
            key={slide.id} // Unique keys now
            className={styles.item}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.headerText}>
              <span className={styles.location}>
                {slide.city}, <em>{slide.state}</em>
              </span>
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.owlNav}>
        <button className={styles.owlPrev} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.owlNext} onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className={styles.owlDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.owlDot} ${
              index === currentIndex - 1 ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
