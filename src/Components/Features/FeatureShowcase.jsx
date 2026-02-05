import { useState, useEffect } from "react";
import FeatureSlide from "./FeatureSlide";
import useScrollReveal from "../../hooks/useScrollReveal";

const FeatureShowcase = () => {
  const [idx, setIdx] = useState(0);
  const { ref, visible } = useScrollReveal();

  useEffect(() => {
    const i = setInterval(() => {
      setIdx(p => (p + 1) % 3);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <section ref={ref} className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* FIXED HEIGHT WRAPPER */}
        <div className="min-h-105 flex items-center justify-center">
          <FeatureSlide
            featureIndex={idx}
            animate={visible}
          />
        </div>

      </div>
    </section>
  );
};

export default FeatureShowcase;
