import clsx from 'clsx'
import { cards } from '../cards.js'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Featured() {
    return <main className="w-full">
            <h1 className="text-white text-6xl tb:text-4xl mb:text-3xl pt-24 tb:pt-16 pl-14 tb:pl-10 pb-9 mb:p-7 mb:flex mb:justify-center border-b border-zinc-200">Featured Projects</h1>
             <div id="cards" className="grid grid-cols-2 mb:grid-cols-1 p-7 mb:p-1 gap-2">
                {cards.map((card,i) => {
                    return <Card key={i} name={card.name} img={card.img} buttons={card.buttons} />
                })}
             </div>
        </main>
}

function Card({name, img, buttons}){

    const spanRefs = useRef([])

    function handleMouseEvent(isEntering,i) {
        gsap.to(spanRefs.current[i], {
            scaleY: isEntering ? 1 : 0,
            duration: 0.3,
            transformOrigin: isEntering ? 'bottom' : 'top',
            ease: 'power2.inOut'
        })
    }

    return <main className='flex flex-col p-1 gap-4 mt-5'>
          <div className='flex items-center gap-3 text-white'>
              <span className='size-3 bg-white rounded-full'></span>
              <span className='uppercase'>{name}</span>
          </div>
          <img className={clsx('rounded-2xl hover:scale-90 duration-700', name === 'VISE' && 'border border-gray-200')} src={img}/>
          <div id='buttons' className='flex flex-wrap p-1 gap-5'>
               {buttons.map((name,i) => {
                return <button onMouseEnter={() => handleMouseEvent(true,i)} onMouseLeave={() => handleMouseEvent(false,i)} key={i} className='relative flex-center uppercase text-white mb:text-sm border border-zinc-300 py-1 px-2 rounded-full hover:border-transparent hover:text-black duration-200'>
                    <span className='z-10'>{name}</span>
                   <span ref={el => spanRefs.current[i] = el} className='absolute w-full h-full rounded-full bg-white scale-y-0'></span>
                </button>
               })}
          </div>
    </main>
}