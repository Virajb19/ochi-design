import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Lenis from "lenis";
import { useEffect } from "react";

export default function App() {
 
      useEffect(() => { // PARALLAX EFFECT
            const lenis = new Lenis({
                  duration: 1.5,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  smooth: true,
                  infinite: false,
                })

                function raf(time) {
                  lenis.raf(time);
                  requestAnimationFrame(raf)
                }
            
                requestAnimationFrame(raf)
            
                return () => lenis.destroy()
      })

  return (
    <main className="w-full min-h-screen bg-zinc-900">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </main>
  );
}
