import { useRef } from "react"
import { cards2 } from "../cards"
import gsap from "gsap"
import { twMerge } from "tailwind-merge"

export default function Cards() {
    return <main className="flex mb:flex-col tb:grid tb:grid-cols-2 pt-20 px-10 tb:px-5 mb:px-3 mb:py-10 gap-5 w-full sm:h-screen">
            {cards2.map((card,i) => {
                return <Card key={i} img={card.img} button={card.button} id={i + 1}/>
            })}
        </main>
}

function Card({img, button, id}) {
  
    const spanRef = useRef(null)
 
    function handleMouseEvent(isEntering) {
        gsap.to(spanRef.current, {
            scaleY: isEntering ? 1 : 0,
            duration: 0.3,
            transformOrigin: isEntering ? 'bottom' : 'top',
            ease: 'power2.inOut'
        })
    }

    return <div className={twMerge("relative flex-center flex-col p-1 rounded-xl w-[23%] tb:w-full mb:w-full h-[60%] tb:h-3/4 mb:h-72 bg-[#212121]", id == 1 && "w-1/2 tb:w-full tb:h-full tb:col-span-2 bg-[#004D43]")}>
         <img src={img} width={id == 3 ? 100 : 150}/>
         <div className="absolute bottom-7 mb:bottom-3 left-5">
         <button onMouseEnter={() => handleMouseEvent(true)} onMouseLeave={() => handleMouseEvent(false)} className={twMerge('relative overflow-hidden flex-center uppercase text-white mb:text-sm border border-zinc-300 py-1 px-2 rounded-full hover:border-transparent hover:text-black duration-200', id == 1 && 'text-[#CDEA68] border-[#CDEA68] hover:text-[#004D43]')}>
                    <span className='z-10'>{button}</span>
                   <span ref={spanRef} className={twMerge('absolute w-full h-full rounded-full bg-white scale-y-0', id === 1 && 'bg-[#CDEA68]')}></span>
         </button>
         </div>
    </div>
}