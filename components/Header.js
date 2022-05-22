import Image from "next/image"
import moraLogo from "../public/moraLogo.png"
import me from "../public/me.png"
import Link from "next/link"

function Header() {
  return (
    <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div className="flex justify-center lg:justify-between p-4 lg:px-20 lg:py-4">
        <div className="mt-5">
          <Link href="/">
            <a href="#">
              <Image
                alt="Picture of the author"
                width={190}
                height={44}
                src={moraLogo} />
              </a>
          </Link>
        </div>

        <div className="hidden lg:flex space-x-6 mt-9">
          <ul className="flex items-center space-x-6 text-lg">
            <Link href="/">
              <li className="mb-10"><a href="#">Home</a></li>
            </Link>
            <li className="mb-10"><a href="#about">About me</a></li>
            <li className="mb-10"><a href="#skills">Skills</a></li>
            <li className="mb-10"><a href="#portfolio">My Work</a></li>
            <li className="mb-10"><a target="_blank" href="https://wa.me/593978821259" className="bg-zinc-800 text-white py-3 px-10">Get in touch</a></li>
          </ul>
          {/* <div className="flex flex-col space-y-2 bg-white py-4 px-2 rounded-full">
            <div className="w-12 h-12 bg-es-flag bg-center bg-cover rounded-full"></div>
            <div className="w-12 h-12 bg-en-flag bg-center bg-cover rounded-full"></div>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:px-16">
        <div className="flex items-end p-4 md:w-2/4">
          <div className="w-full text-center md:pb-16 md:text-left lg:pb-24">
            <h1 className="text-4xl lg:text-5xl">HI, <span className="text-sky-900">I’M CLEIBERT MORA</span></h1>
            <h2 className="text-2xl lg:text-3xl">I am a Web Developer</h2>
            <p className="text-bold mb-6">From back to front and learning more everyday :)</p>
            <a href="#about" className="py-5 px-20 bg-sky-900 text-white text-medium text-lg hover:bg-sky-800">ABOUT ME</a>
          </div>
        </div>
        <div className="w-full flex justify-center md:w-2/4 shadow-lg">
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