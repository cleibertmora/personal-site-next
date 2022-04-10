import Image from "next/image"
import meSit from "../public/meSit.jpg"

function About() {
  return (
    <div class="flex flex-col-reverse p-16 md:flex-row">
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
                    <h1 class="text-5xl"><b>ABOUT</b> ME</h1>
                    <h3 class="text-4xl">Why I’m doing web dev</h3>
                </span>
                <p class="font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae odio varius, tincidunt mi vitae, tincidunt lacus. Nunc hendrerit neque sed enim porttitor, at consectetur est viverra.</p>
                <p class="text-lg">Morbi sollicitudin leo in tortor consectetur, eu tincidunt velit mollis. Praesent id mi lacinia tellus rhoncus vestibulum ut at libero.</p>
                <p class="text-center"><button class="py-3 px-14 bg-zinc-800 text-white text-lg">My Skills</button></p>
            </div>
        </div>
    </div>
  )
}

export default About