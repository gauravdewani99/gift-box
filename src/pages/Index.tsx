import { useState } from "react";
import { motion } from "framer-motion";
import GiftBox from "@/components/GiftBox";
import GiftContent from "@/components/GiftContent";
import ImageSlideshow from "@/components/ImageSlideshow";

const Index = () => {
  const [openGift, setOpenGift] = useState<string | null>(null);
  const [showSmallGifts, setShowSmallGifts] = useState(false);

  const handleMainGiftClick = () => {
    setShowSmallGifts(true);
  };

  const handleGiftClick = (giftType: string) => {
    setOpenGift(giftType);
  };

  const handleBack = () => {
    setOpenGift(null);
  };

  if (openGift) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
        <GiftContent type={openGift as any} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-center mb-8 text-purple-800"
      >
        Happy Birthday Pranav! 🎈🎉
      </motion.h1>

      {!showSmallGifts ? (
        <div className="flex justify-center">
          <GiftBox onClick={handleMainGiftClick} title="Open Me!" large />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <GiftBox onClick={() => handleGiftClick("crossword")} title="Pranav's Crossword" />
          <GiftBox onClick={() => handleGiftClick("connections")} title="Pranav's Connections" />
          <GiftBox onClick={() => handleGiftClick("wordle")} title="Pranav's Wordle" />
          <GiftBox onClick={() => handleGiftClick("jukebox")} title="Pranav's Birthday Jukebox" />
        </div>
      )}

      <ImageSlideshow />

      {/* Floating Balloons */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
            animate={{
              y: "-20vh",
              x: `${Math.random() * 100}vw`,
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "🎈" : "✨"}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;