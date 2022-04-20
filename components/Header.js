import Image from "next/image"
import moraLogo from "../public/moraLogo.png"
import me from "../public/me.png"

function Header() {
  return (
    <header class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div class="flex justify-center lg:justify-between p-4 lg:px-20 lg:py-4">
        <div class="mt-5">
          <Image
            alt="Picture of the author"
            width={190}
            height={44}
            src={moraLogo} />
        </div>

        <div class="hidden lg:flex space-x-6">
          <ul class="flex items-center space-x-6 text-lg">
            <li class="mb-10"><a href="#">Home</a></li>
            <li class="mb-10"><a href="#">About me</a></li>
            <li class="mb-10"><a href="#">Skills</a></li>
            <li class="mb-10"><a href="#">My Work</a></li>
            <li class="mb-10"><a href="#" class="bg-zinc-800 text-white py-3 px-10">Get in touch</a></li>
          </ul>
          <div class="flex flex-col space-y-2 bg-white py-4 px-2 rounded-full">
            <div class="w-12 h-12 bg-es-flag bg-center bg-cover rounded-full"></div>
            <div class="w-12 h-12 bg-en-flag bg-center bg-cover rounded-full"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:px-16">
        <div class="flex items-end p-4 md:w-2/4">
          <div class="w-full text-center md:pb-16 md:text-left lg:pb-24">
            <h1 class="text-4xl lg:text-5xl">HI, <span class="text-sky-900">I’M CLEIBERT MORA</span></h1>
            <h2 class="text-2xl lg:text-3xl">I am a Web Developer</h2>
            <p class="text-bold mb-6">From back to front and learning more everyday :)</p>
            <button class="py-5 px-20 bg-sky-900 text-white text-medium text-lg hover:bg-sky-600/50">ABOUT ME</button>
          </div>
        </div>
        <div class="w-full flex justify-center md:w-2/4 shadow-lg">
          <Image
            alt="Picture of the author"
            width={500}
            height={600}
            src={me} />
        </div>
      </div>
    </header>
  )
}

export default Header