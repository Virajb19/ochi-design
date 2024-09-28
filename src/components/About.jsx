import gsap from "gsap";
import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa6"

export default function About() {

    const spanRef = useRef(null)

   function handleOnMouseEnter() {
      gsap.to(spanRef.current, {
        scale: 1.1,
        duration: 0.5,
        ease: 'expo.out',
        color: 'black'
      })

      gsap.to('img', {scale: window.innerWidth > 1280 ? 1.08 : 0.9, duration: 1})
   }

   function handleOnMouseLeave() {
     gsap.to(spanRef.current, {
        scale: 0.3,
        duration: 0.5,
        ease: 'expo.out',
        color: 'white'
     })

     gsap.to('img', {scale: 1, duration: 1})
   }

  return (
    <main className="bg-[#CDEB69] rounded-tr-2xl rounded-tl-2xl p-1">
      <p className="text-6xl tb:text-4xl mb:text-2xl lp:w-[80%] mb:text-left p-1 lp:mt-20 lp:ml-14 mb-14">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to 
        {" raise funds,sell prod­ucts, ex­plain com­plex ideas, hire great peo­ple.".split(',').map((text,i) => {
            return <>
            {i == 3 && "and "}
            <span key={i} className="underline underline-offset-2">{text}</span>
            {i != 3 && ","} {" "}
            </> 
        })}
      </p>
      <div className="flex mb:flex-col px-1 justify-between mb:gap-5 border-t border-gray-700 py-20 mb:py-2">
           <div className="flex flex-col p-1 gap-5 ml-10 tb:ml-0 mb:ml-0">
             <span className="text-6xl tb:text-4xl mb:text-3xl">Our approach:</span>
             <button onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flex px-1 py-3 mb:p-2 bg-gray-900 gap-1 text-white justify-evenly items-center text-base w-1/2 tb:w-3/4 mb:w-[60%] rounded-full">READ MORE <span ref={spanRef} className="rotate-45 p-2 bg-white text-xl rounded-full scale-[0.3]"><FaArrowUp /></span></button>
           </div>
        <img className="rounded-lg mr-10 tb:mr-0 w-[50rem] tb:w-[30rem]" src={"https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"}/>
      </div>
    </main>
  );
}
