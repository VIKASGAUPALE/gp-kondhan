import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function HeroSlider() {
  const slides = siteData.heroSlides;
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [index]);
  const s = slides[index];
  return (
    <section className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div key={s.image + index} className="hero-slide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <img src={s.image} alt={s.titleMr} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow">ग्रुप ग्रामपंचायत कोंढाण</span>
            <h1>{s.titleMr}</h1>
            <p>{s.textMr}</p>
            <Link className="btn btn-primary" to={s.link}>{s.buttonMr}</Link>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="slider-btn left" onClick={prev} aria-label="मागील"><ChevronLeft /></button>
      <button className="slider-btn right" onClick={next} aria-label="पुढील"><ChevronRight /></button>
      <div className="dots">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={i === index ? "dot active" : "dot"} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
