import Image from "next/image"
import meSit from "../public/meSit.jpg"

function About() {
  return (
    <div id="about" class="flex flex-col-reverse p-16 md:flex-row">
        <div class="mt-6 md:mt-0 md:w-1/2">
            <div class="drop-shadow-xl">
                <Image
                    alt=""
                    class="drop-shadow-xl"
                    // width={390}
                    // height={390}
                    src={meSit} />
            </div>
        </div>
        <div class="flex items-center md:w-1/2">
            <div class="md:p-10 space-y-7">
                <span>
                    <h1 class="text-5xl"><b class="text-blue-900">ABOUT</b> ME</h1>
                    <h3 class="text-4xl">Why I’m doing web dev</h3>
                </span>
                <p class="font-bold text-2xl">It will be a pleasure to meet you if you wish. I am a developer with +5 years of experience developing websites, business management systems and using differents digital tools.</p>
                <p class="text-lg">I am characterized by my commitment to offer solutions that optimize processes and improve the productivity of my clients. Communication is, in my opinion, my greatest virtue and the skill I work on every day to improve as a professional.</p>
                <p class="text-center">
                    <a href="#skills" class="py-3 px-14 bg-zinc-800 text-white text-lg hover:bg-zinc-700">My Skills</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About