import { useState, useEffect } from "react";
import Nav from "@parts/Nav.tsx";
import Socials from "@parts/Socials.tsx";
import Footer from "@parts/Footer.tsx";
import Hero from "@components/Hero.tsx";
import About from "@components/About.tsx";
import { NumberTicker } from "@components/magicui/number-ticker.tsx";

function App() {
  const [value, setValue] = useState<number>(0);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [_showPercent] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(100);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (value === 100) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 5000);
    }
  }, [value]);

  return (
    // Loading screen
    <div className="text-cWhite relative sm:mx-20">
      {!startAnimation && (
        <div className="bg-dark fixed inset-0 z-50 flex h-screen items-center justify-center">
          <NumberTicker
            value={value}
            className="font-clashDisplay text-9xl"
            showPercent
          />
        </div>
      )}

      <Nav startAnimation={startAnimation} />
      <Socials startAnimation={startAnimation} />
      <Hero startAnimation={startAnimation} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
