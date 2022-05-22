import Image from "next/image"
import meSit from "../public/meSit.jpg"

function About() {
  return (
    <div id="about" className="flex flex-col-reverse p-16 md:flex-row">
        <div className="mt-6 md:mt-0 md:w-1/2">
            <div className="drop-shadow-xl">
                <Image
                    alt=""
                    className="drop-shadow-xl"
                    // width={390}
                    // height={390}
                    src={meSit} />
            </div>
        </div>
        <div className="flex items-center md:w-1/2">
            <div className="md:p-10 space-y-7">
                <span>
                    <h1 className="text-5xl"><b className="text-blue-900">ABOUT</b> ME</h1>
                    <h3 className="text-4xl">Why I’m doing web dev</h3>
                </span>
                <p className="font-bold text-2xl">It will be a pleasure to meet you if you wish. I am a developer with +5 years of experience developing websites, business management systems and using differents digital tools.</p>
                <p className="text-lg">I am characterized by my commitment to offer solutions that optimize processes and improve the productivity of my clients. Communication is, in my opinion, my greatest virtue and the skill I work on every day to improve as a professional.</p>
                <p className="text-center">
                    <a href="#skills" className="py-3 px-14 bg-zinc-800 text-white text-lg hover:bg-zinc-700">My Skills</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About