import {useState, useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/Portfolio.module.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image"

function Portfolio() {
  const [items, setItems] = useState([
    {id: 1, url:'https://alimentosysuplementos.com/', image: 'alimentosysuplmentos.png', description: `One of my projects, it's a digital magazine about diet and wellness. Built with WordPress.`},
    {id: 2, url:'https://marthaalarcon.com/', image: 'marthaalarcon.png', description: 'eCommerce site for a writer, created using WooCommerce and WordPress.'},
    {id: 3, url:'https://fundaeoe.org/', image: 'fundaeoe.png', description: `eLearning platform for a foundation, built with Laravel, jQuery, and Bootstrap.`},
    {id: 4, url:'https://odontologiaguayaquil.club/', image: 'odontologiaguayaquil.png', description: `SEO-optimized website to rank locally for the dental niche. Built with WordPress`},
    {id: 5, url:'https://redecuadental.com/', image: 'redmed.png', description: `I developed the complete system for this company, where the business can be managed completely. I have used Laravel, MySQL, React JS, Firebase, and third party API's.`},
    {id: 6, url:'https://soloembutidos.com/', image: 'soloembutidos.png', description: `SEO-optimized website to rank globally for a food sub-niche. Built with WordPress`},
    {id: 7, url:'https://smartmedic.tech/', image: 'smartmedic.png', description: `This is a SaaS and I've been in this project as a Full-Stack Developer, Project Manager, UX / UI Designer, Web Developer, Process Consultant, and Tech Lead.`},
    {id: 8, url:'https://www.dharma-spa.com/', image: 'dharmaspa.png', description: `system to calculate commissions of the staff, based on the billing and the carried out treatments. Built with Laravel, jQuery and Bootstrap.`},
    {id: 9, url:'https://pararockeros.com/', image: 'pararockeros.png', description: `Affliate amazon website for music. Built with WordPress`},
    {id: 10, url:'http://www.tardisensa.com.ec/', image: 'tardisensa.png', description: `Website for a construction company, built with pure CSS (Grid) and JavaScript`},
  ])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if(emblaApi){

    }
  }, [emblaApi])

  return (
    <div id="portfolio" className="flex flex-col space-y-4 pt-20 pb-48 bg-gray-200">
        <div className="text-center px-10 mb-10">
            <h1 className="text-5xl mt-6 font-light">Take a look of <span className="font-bold text-sky-800">My Work</span></h1>
            <p className="mt-5 text-2xl">Up until this point my entire freelance/professional work has been created for Latin America companies and individuals only, for that reason you’re going to notice that all the projects are on Spanish. I just use English for my own personal projects.</p>
        </div>

        <div className="flex flex-row justify-center">
          <button className="embla__prev" onClick={scrollPrev}>
            <MdKeyboardArrowLeft size={'4rem'} />
          </button>
          <div className={styles.embla}>
            <div className="embla__viewport" ref={emblaRef}>
              <div className={styles.embla__container}>
                {items && items.map(el => 
                  <div
                    key={el.id}
                    // className="bg-white mx-5 shadow-lg p-5" 
                    className={`bg-white mx-3 shadow-xl px-5 py-2 grid grid-cols-1 content-center text-center ${styles.embla__slide}`}
                    >
                    <Image 
                      src={`/../public/projects/${el.image}`}
                      width={200}
                      height={200}
                      alt="" />
                    <p>
                      {el.description}
                    </p>
                    <div className="mt-5">
                      <a target="_blank" href={el.url} className="py-3 px-14 bg-zinc-800 text-white text-lg hover:bg-zinc-700">Visit</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="embla__next" onClick={scrollNext}>
            <MdKeyboardArrowRight size={'4rem'} />
          </button>
        </div>

    </div>
  )
}

export default Portfolio