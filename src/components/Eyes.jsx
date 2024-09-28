import clsx from "clsx"
import { useEffect, useState } from "react"

export default function Eyes() {

    const [rotate,setRotate] = useState(0)

   useEffect(() => {
     window.addEventListener('mousemove', e => {
        const mouseX = e.clientX
        const mouseY = e.clientY
 
        const deltaX = mouseX - window.innerWidth / 2
        const deltaY = mouseY - window.innerHeight / 2

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
        setRotate(angle - 180)
     })
   }, [])

    return (
      <main className="w-full overflow-hidden bg-[#F6F6F6]">
            <div className="relative w-full flex-center">
                 <img className="object-cover -z-100" src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"/>
                 <div className="absolute w-96 tb:w-72 mb:w-40 h-40 tb:h-28 mb:h-20 p-1 flex gap-1 justify-around items-center">
                     <div className="bg-zinc-200 size-40 tb:size-28 mb:size-16 rounded-full flex-center">
                        <div className="w-1/2 h-1/2 bg-black rounded-full flex-center">
                            <div className="h-5 mb:h-2 tb:h-4 w-full" style={{transform: `rotate(${rotate}deg)`}}>
                             <div className="bg-zinc-100 rounded-full size-5 tb:size-4 mb:size-2"></div>
                            </div>
                        </div>
                     </div>
                     <div className="bg-zinc-200 size-40 tb:size-28 mb:size-16 rounded-full flex-center">
                     <div className="w-1/2 h-1/2 bg-black rounded-full flex-center">
                            <div className="h-5 mb:h-2 tb:h-4 w-full" style={{transform: `rotate(${rotate}deg)`}}>
                             <div className="bg-zinc-100 rounded-full size-5 tb:size-4 mb:size-2"></div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
      </main>
    )
  }