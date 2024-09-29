import gsap from "gsap"
import { useRef } from "react"
import { FaArrowUp } from "react-icons/fa6"

export default function Button({name}) {

    const spanRef = useRef(null)

       function handleOnMouseEvent(isEntering) {
       gsap.to(spanRef.current, {
         scale: isEntering ? 1.1 : 0.3,
         duration: 0.5,
         ease: 'expo.out',
         color: isEntering ? 'black' : 'white'
       })
    }

    return  <div className="flex-center mt-5">
            <button onMouseEnter={() => handleOnMouseEvent(true)} onMouseLeave={() => handleOnMouseEvent(false)} className="flex px-1 py-2 mb:p-2 bg-black gap-1 text-white justify-around items-center text-lg w-[23%] tb:w-80 mb:w-3/4  rounded-full uppercase">
                   {name}
               <span ref={spanRef} className="rotate-45 p-2 bg-white text-xl rounded-full scale-[0.3]"><FaArrowUp /></span>
           </button>
    </div>
}