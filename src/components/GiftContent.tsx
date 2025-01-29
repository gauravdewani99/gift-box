import { Button } from "./ui/button";

interface GiftContentProps {
  type: "crossword" | "connections" | "wordle" | "jukebox";
  onBack: () => void;
}

const GiftContent = ({ type, onBack }: GiftContentProps) => {
  const renderContent = () => {
    switch (type) {
      case "crossword":
        return (
          <div className="text-center">
            <p className="mb-4 text-lg">
              Click{" "}
              <a
                href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                here
              </a>{" "}
              to view your birthday crossword!
            </p>
          </div>
        );
      case "connections":
        return (
          <div className="text-center">
            <p className="mb-4 text-lg">
              Click{" "}
              <a
                href="https://connections.swellgarfo.com/game/-OHnbiy71UQUZZc2n3K5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                here
              </a>{" "}
              to view your birthday connections!
            </p>
          </div>
        );
      case "wordle":
        return (
          <div className="text-center">
            <p className="mb-4 text-lg">
              Click{" "}
              <a
                href="https://mywordle.strivemath.com/?word=hcmhf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                here
              </a>{" "}
              to view your birthday wordle!
            </p>
          </div>
        );
      case "jukebox":
        return (
          <div className="text-center">
            <p className="mb-4 text-lg">Here are 5 songs that are more than just songs:</p>
            <div className="space-y-2">
              <p>
                <a
                  href="https://open.spotify.com/track/5Q7TzTJTgpFnaybWvDA4jd?si=ea4b66fc5c2146b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Song #1
                </a>
              </p>
              <p>
                <a
                  href="https://open.spotify.com/track/36LQYp5FNsuT5voIO9bdfZ?si=d7cfd1d422c84f31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Song #2
                </a>
              </p>
              <p>
                <a
                  href="https://open.spotify.com/track/464gxyow4GJ7Wuz3cHrdBB?si=82486fd42cac42dc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Song #3
                </a>
              </p>
              <p>
                <a
                  href="https://open.spotify.com/track/1lrVcur8lGCYOPOO9rStLE?si=6e7a273d5c5f4328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Song #4
                </a>
              </p>
              <p>
                <a
                  href="https://open.spotify.com/track/6Rskn0hM0xj3t03foHpH7C?si=4e39aa3185b644a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Song #5
                </a>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {renderContent()}
      <Button onClick={onBack} className="mt-4">
        Back to Gifts
      </Button>
    </div>
  );
};

export default GiftContent;