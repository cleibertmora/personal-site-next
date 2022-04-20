import { MdWidgets, MdClose } from "react-icons/md"
import { useState } from "react"

function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false) 

    return (
      <>
        <div class="fixed bottom-0 right-0 p-5 lg:hidden">
            <button class="bg-sky-800 hover:bg-sky-700 text-white p-5 rounded-full drop-shadow-xl">
                <MdWidgets
                    onClick={() => setOpenMenu(true)} 
                    size={'3.5rem'} />
            </button>
        </div>
        <div className={`${!openMenu ? 'hidden' : 'fixed'} bottom-0 left-0 w-full bg-slate-100 right-0 p-5 drop-shadow-2xl`}>
            <div class="w-full flex justify-end my-2 cursor-pointer">
                <MdClose
                    onClick={() => setOpenMenu(false)} 
                    size={'3rem'}/>
            </div>
            <ul class="flex w-full flex-col items-center space-y-6 text-2xl mb-5">
                <li class="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#">Home</a></li>
                <li class="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#">About me</a></li>
                <li class="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#">Skills</a></li>
                <li class="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#">My Work</a></li>
                <li class="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#">Get in touch</a></li>
            </ul>
            <div class="flex justify-center space-x-2 bg-sky-800 py-4 px-2 mx-32 mb-10 rounded-full">
                <div class="w-12 h-12 bg-es-flag bg-center bg-cover rounded-full"></div>
                <div class="w-12 h-12 bg-en-flag bg-center bg-cover rounded-full"></div>
            </div>
        </div>
      </>
  )
}

export default MobileMenu