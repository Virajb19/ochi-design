import { useRef } from "react"

const spanRef = useRef(null)

export function handleOnMouseEvent(isEntering) {
   gsap.to(spanRef.current, {
     scale: isEntering ? 1.1 : 0.3,
     duration: 0.5,
     ease: 'expo.out',
     color: isEntering ? 'black' : 'white'
   })
}