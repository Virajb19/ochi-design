import { useState } from "react"
import { FaArrowUp } from "react-icons/fa6"
import { motion } from 'framer-motion'

export default function Button({name}) {

    const [isHovering, setIsHovering] = useState(false)

    return  <div className="flex-center mt-5">
            <button onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="flex px-1 py-2 mb:p-2 bg-black gap-1 text-white justify-around items-center text-lg w-[23%] tb:w-80 mb:w-3/4 rounded-full uppercase">
                   {name}
               <motion.span animate={isHovering ? {scale: 1.1, color: 'black'} : {scale: 0.3, color: 'white'}} transition={{duration: 0.5, ease: [0.33, 1, 0.68, 1]}} className="p-2 scale-[0.3] bg-white text-xl rounded-full"><FaArrowUp className="rotate-45" /></motion.span>
           </button>
    </div>
}