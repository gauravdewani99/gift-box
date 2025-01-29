import { motion } from "framer-motion";

interface GiftBoxProps {
  onClick: () => void;
  title: string;
  large?: boolean;
}

const GiftBox = ({ onClick, title, large = false }: GiftBoxProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer ${
        large ? "w-64 h-64" : "w-48 h-48"
      } bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-white`}
      onClick={onClick}
    >
      <span className="text-4xl mb-2">🎁</span>
      <p className="text-center font-semibold">{title}</p>
    </motion.div>
  );
};

export default GiftBox;