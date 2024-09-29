import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import { useRef } from "react"
import { FaArrowUp } from "react-icons/fa6"

export default function Landing() {

    const spanRef = useRef(null)

    useGSAP(() => {
        gsap.to(spanRef.current, {
            width: window.innerWidth < 640 ? '5rem' : '8rem',
            duration: 1.2,
            ease: 'expo.inOut'
        })
    }, [])

    function handleMouseEvent(isEntering) {
            gsap.to('#animate', {
                scale: isEntering ? 1 : 0,
                duration: 0.5,
                ease: 'expo.out'
            })
    }
    
    return <main className="p-1">
            <div id="masker" className="text-white uppercase pl-3 pt-3 sm:pl-12 sm:pt-9">
               {['we create','eye-opening','presentations'].map((text,i) => {
                return <h1 key={i} className="text-8xl tb:text-6xl mb:text-4xl tracking-tighter font-extrabold flex items-center gap-1">
                    {i === 1 && <span ref={spanRef} className="w-0 rounded-lg h-[4.4rem] tb:h-[3.5rem] mb:h-[2.25rem] mt-3 mb:mt-1 bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png')]"></span>}
                    {text}
                </h1>
               })}
            </div>
            <div className="border-t-[1px] tb:text-sm mb:text-sm border-zinc-300 mt-12 sm:mt-32 text-white p-2 flex justify-around items-center mb:flex-col mb:items-start mb:gap-5">
                <div className="text-white flex w-[65%] mb:w-full justify-between mb:flex-col mb:gap-3">
                   {['For public and private companies','From the first pitch to IPO'].map((item,i) => {
                    return <p key={i} className={clsx(i == 1 && "mr-28 tb:mr-10")}>{item}</p>
                   })}
                </div>
                <div className="flex gap-4 items-center">
                   <button onMouseEnter={() => handleMouseEvent(true)} onMouseLeave={() => handleMouseEvent(false)} className="px-3 py-1 border border-white hover:border-transparent hover:bg-white hover:text-black duration-500 rounded-full peer">START THE PROJECT</button>
                   <span className="rotate-45 flex-center rounded-full text-xl mb:text-base p-2 border peer-hover:text-black duration-200 relative">
                    <FaArrowUp />
                    <span id="animate" className="absolute w-full h-full rounded-full bg-white -z-10 scale-0"></span>
                  </span> 
                </div>
            </div>
        </main>
}