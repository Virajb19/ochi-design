export default function Footer() {
    return <footer className="bg-zinc-200 lp:h-screen tb:h-[50vh]">
            <div className="flex mb:flex-col p-1 gap-1 mb:gap-0 uppercase justify-around pt-20 tb:pt-10 mb:pt-5">
                <h1 className="text-8xl tb:text-c-5xl mb:text-5xl p-1 font-extrabold tracking-tighter w-1/3 mb:w-full">eye-opening</h1>

                <div className="flex flex-col p-1 gap-1">
                    <h1 className="text-8xl tb:text-c-5xl mb:text-5xl font-extrabold tracking-tighter">presentations</h1>
                    {['facebook', 'instagram', 'twitter'].map((text,i) => {
                        return <a key={i} className="font-bold capitalize hover:underline duration-200 underline-offset-2 sm:p-1" href="#">{text}</a>
                    })}
                </div> 
            </div>
        </footer>
}