import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Reduced to 6 images instead of 9 for better performance
const images = [
  "/lovable-uploads/d30ab856-5ac8-4c8f-b240-2258277b06a1.png",
  "/lovable-uploads/e8e3e3a6-ec93-4d06-a8c1-75a0be1393fb.png",
  "/lovable-uploads/eaf3236a-d765-472c-98d6-cfe813ddb613.png",
  "/lovable-uploads/3a063172-880c-4c68-b4ad-d1744c2c2e7c.png",
  "/lovable-uploads/6e67c774-de88-432e-ad0f-3be201c21ce7.png",
  "/lovable-uploads/50035e15-fa1f-4e06-862a-ddc564470525.png"
];

const ImageSlideshow = () => {
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffleImages = () => {
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      setCurrentImages(shuffled.slice(0, 3));
    };

    shuffleImages();
    const interval = setInterval(shuffleImages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {currentImages.map((image, index) => (
        <motion.div
          key={`${image}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-square rounded-lg overflow-hidden"
        >
          <img
            src={image}
            alt={`Slideshow ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageSlideshow;