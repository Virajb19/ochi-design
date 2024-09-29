export default function Button() {
    return  <button onMouseEnter={() => handleOnMouseEvent(true)} onMouseLeave={() => handleOnMouseEvent(false)} className="flex px-1 py-3 mb:p-2 bg-gray-900 gap-1 text-white justify-evenly items-center text-base w-1/2 tb:w-3/4 mb:w-[60%] rounded-full">
                READ MORE 
            <span ref={spanRef} className="rotate-45 p-2 bg-white text-xl rounded-full scale-[0.3]"><FaArrowUp /></span>
        </button>
}