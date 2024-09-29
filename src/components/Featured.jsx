import clsx from 'clsx'
import { cards } from '../cards.js'
import gsap from 'gsap'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useMediaQuery } from 'react-responsive'
import Button from './Button.jsx'

export default function Featured() {
    return <main className="w-full">
            <h1 className="text-white text-6xl tb:text-4xl mb:text-3xl pt-24 tb:pt-16 pl-14 tb:pl-10 pb-9 mb:p-7 mb:flex mb:justify-center border-b border-zinc-200">Featured Projects</h1>
             <div id="cards" className="grid grid-cols-2 mb:grid-cols-1 p-7 tb:p-5 mb:p-1 gap-2">
                {cards.map((card,i) => {
                    return <Card key={i} name={card.name} img={card.img} buttons={card.buttons} id={i}/>
                })}
             </div>
             <Button name={'View all case studies'}/>
        </main>
}

function Card({name, img, buttons, id}){

    const spanRefs = useRef([])
    const letterRefs = useRef([])
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

    function handleMouseEvent(isEntering,i) {
        gsap.to(spanRefs.current[i], {
            scaleY: isEntering ? 1 : 0,
            duration: 0.3,
            transformOrigin: isEntering ? 'bottom' : 'top',
            ease: 'power2.inOut'
        })
    }

    function handleImgHover(isEntering){
          gsap.fromTo(letterRefs.current, {opacity: isEntering ? 0 : 1, y: isEntering ? '100%' : 0}, {
            y: isEntering ? 0 : '100%',
            opacity: isEntering ? 1 : 0,
            stagger: 0.06,
            ease: [0.22, 1, 0.36, 1]
          }
         )
    }

    return <main className='relative flex flex-col p-1 gap-4 mt-5'>
          <div className='flex items-center gap-3 text-white'>
              <span className='size-3 bg-white rounded-full'></span>
              <span className='uppercase'>{name}</span>
          </div>
          <img onMouseEnter={() => handleImgHover(true)} onMouseLeave={() => handleImgHover(false)} className={clsx('rounded-2xl cursor-pointer hover:scale-90 duration-700', name === 'VISE' && 'border border-gray-200')} src={img}/>
          <h1 className={twMerge('absolute text-center top-1/2 tb:top-1/3 mb:top-[35%] mb:left-0 mb:text-center mb:w-full z-10 text-[#CDEA68] font-extrabold text-8xl tb:text-5xl mb:text-5xl tracking-widest uppercase', !isMobile && (id % 2 == 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'))}>
           {name.split('').map((letter,i) => {
             return <span className='inline-block' ref={el => letterRefs.current[i] = el} key={i}>{letter}</span>
           })}
          </h1>
          <div id='buttons' className='flex flex-wrap p-1 gap-5'>
               {buttons.map((name,i) => {
                return <button onMouseEnter={() => handleMouseEvent(true,i)} onMouseLeave={() => handleMouseEvent(false,i)} key={i} className='relative overflow-hidden flex-center uppercase text-white mb:text-sm tb:text-sm border border-zinc-300 py-1 px-2 rounded-full hover:border-transparent hover:text-black duration-200'>
                    <span className='z-10'>{name}</span>
                   <span ref={el => spanRefs.current[i] = el} className='absolute w-full h-full rounded-full bg-white scale-y-0'></span>
                </button>
               })}
          </div>
    </main>
}