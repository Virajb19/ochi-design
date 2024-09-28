import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'

export default function App(){
    
      useEffect(() => {
        const lenis = new Lenis({duration: 1.5, smooth: true, infinite: false})
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        } 
        requestAnimationFrame(raf)
        return () => lenis.destroy()
   }, [])


 return <main className="w-full min-h-screen bg-zinc-900">
       <Navbar />
       <Landing />
       <Marque />
       <About />
       <Eyes />
       <Featured />
 </main>
}
