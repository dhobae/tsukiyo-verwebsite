import { useState, useEffect } from "react";
import "./assets/tailwind/index.css";
import Background from "./components/Background";

const lyrics = [
  { text: "Suki Yo", duration: 1600 },
  { text: "Ima anata ni omoi nosete hora", duration: 4200 },
  { text: "Sunao ni naru no watashi", duration: 4300 },
  { text: "Kono saki motto", duration: 2300 },
  { text: "Sobani ite moikana", duration: 2800 },
  { text: "Koi to koi ga kasanate", duration: 3400 },
  { text: "Suki Yo...", duration: 1300 },
];

const App = () => {
  const [currentLyric, setCurrentLyric] = useState(0);

  useEffect(() => {
    // Cek apakah currentLyric bukan lirik terakhir
    if (currentLyric < lyrics.length - 1) {
      const interval = setInterval(() => {
        setCurrentLyric((prevLyric) => prevLyric + 1);
      }, lyrics[currentLyric].duration);

      // Hentikan interval saat lirik terakhir ditampilkan
      return () => clearInterval(interval);
    }
  }, [currentLyric]);

  return (
    <>
      <div>
        <Background />
        <div className="relative z-[20] flex items-center justify-center h-screen flex-col lg:p-24">
          <div className="text-center">
            <div className="font-romantic font-bold text-white text-7xl md:text-9xl lg:text-[10rem] lg:leading-[1]">
              {lyrics[currentLyric].text}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
