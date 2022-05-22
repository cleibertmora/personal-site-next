import { FaTwitter, FaWhatsapp, FaPaperclip } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="hidden bg-me-reading bg-cover bg-center lg:flex lg:w-1/2">
            <div className="w-1/2 w-full h-full"></div>
            <div className="w-1/2 bg-gradient-to-r from-transparent to-white w-full h-full"></div>
        </div>
        <div className="px-14 py-28 lg:px-16 lg:py-64 lg:w-1/2">
            <p className="text-center lg:text-right">
            <span className="text-5xl font-thin">“Big opportunities are born</span><br />
            <span className="text-2xl font-bold">from having known how to take advantage 
            of the small ones.”</span><br /><br />
            
            <span className="text-sky-900 text-2xl font-medium">— BILL GATES</span>
            </p>

            <hr className="my-10" />

            <p className="text-lg text-center">Get in touch with me to 
                <a href="mailto:info@cleibertmora.com" className="text-sky-900 font-bold"> info@cleibertmora.com
                </a> Or through any of the channels below:
            </p>

            <div className="flex flex-col space-y-4 justify-center mt-7">
                <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vSw-YL7YB8f5TRcQ4ZL_Lz5aOD76nUGC8VihjrXAv_gzGpdRCov1JGeeefME5Wpt278GVDnr7p2vx01/pub" className="pb-3 pt-4 px-14 bg-zinc-800 text-white text-lg flex space-x-2 hover:bg-zinc-700">
                    <FaPaperclip size={'2rem'} style={{marginRight: '0.7rem'}} /> Download C.V
                </a>
                <a target="_blank" href="https://wa.me/593978821259" className="pb-3 pt-4 px-14 bg-zinc-800 text-white text-lg flex space-x-2 hover:bg-zinc-700">
                    <FaWhatsapp size={'2rem'} style={{marginRight: '0.7rem'}} /> WhatsApp
                </a>
                <a target="_blank" href="https://twitter.com/cleibert_mora" className="pb-3 pt-4 px-14 bg-zinc-800 text-white text-lg flex space-x-2 hover:bg-zinc-700">
                    <FaTwitter size={'2rem'} style={{marginRight: '0.7rem'}} /> Twitter
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact