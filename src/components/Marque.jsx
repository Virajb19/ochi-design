import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Marque() {

    useGSAP(() => {
        gsap.to('#marque h1', {
            xPercent: '-300',
            duration: 30,
            ease: 'linear',
            repeat: -1,
        })
    })

    return <main className="w-full flex-center px-1 py-10 rounded-tr-2xl rounded-tl-2xl bg-[#003E36] mt-44"> 
             <div id="marque" className="w-full flex-center gap-36 overflow-hidden text-zinc-300 border-y-2 border-zinc-200">
                  {new Array(3).fill(' ').map((_,i) => {
                    return <h1 key={i} className="lp:text-[15rem] tb:text-[10rem] mb:text-9xl font-extrabold shrink-0 pb-5 mb:pb-10 leading-none">We are ochi</h1>
                  })}
             </div>
        </main>
}