import { MdWidgets, MdClose } from "react-icons/md"
import { useState } from "react"
import Link from "next/link"

function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false) 

    return (
      <>
        <div className="fixed bottom-0 right-0 p-5 lg:hidden">
            <button className="bg-sky-800 hover:bg-sky-700 text-white p-5 rounded-full drop-shadow-xl">
                <MdWidgets
                    onClick={() => setOpenMenu(true)} 
                    size={'3.5rem'} />
            </button>
        </div>
        <div className={`${!openMenu ? 'hidden' : 'fixed'} bottom-0 left-0 w-full bg-slate-100 right-0 p-5 drop-shadow-2xl`}>
            <div className="w-full flex justify-end my-2 cursor-pointer">
                <MdClose
                    onClick={() => setOpenMenu(false)} 
                    size={'3rem'}/>
            </div>
            <ul className="flex w-full flex-col items-center space-y-6 text-2xl mb-5">
                <Link href="/">
                    <li className="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#">Home</a></li>
                </Link>
                <li className="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#about">About me</a></li>
                <li className="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#skills">Skills</a></li>
                <li className="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a href="#portfolio">My Work</a></li>
                <li className="w-5/6 text-center pb-3 border-solid border-b-2 border-slate-200"><a target="_blank" href="https://wa.me/593978821259">Get in touch</a></li>
            </ul>
            {/* <div className="flex justify-center space-x-2 bg-sky-800 py-4 px-2 mx-32 mb-10 rounded-full">
                <div className="w-12 h-12 bg-es-flag bg-center bg-cover rounded-full"></div>
                <div className="w-12 h-12 bg-en-flag bg-center bg-cover rounded-full"></div>
            </div> */}
        </div>
      </>
  )
}

export default MobileMenu