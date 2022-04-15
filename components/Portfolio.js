import {useState, useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/Portfolio.module.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Portfolio() {
  const [items, setItems] = useState([
    {id: 1, image: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna elit, congue quis ante at, eleifend rutrum odio.'},
    {id: 2, image: '', description: 'Maecenas hendrerit, odio eget posuere consequat, lacus massa sodales leo, ac aliquam elit purus nec risus.'},
    {id: 3, image: '', description: 'In eros dolor, facilisis sed dignissim vel, ornare quis ligula. Curabitur eu fringilla tortor. Vivamus nec odio eu nisi ultrices iaculis feugiat ut velit.'},
    {id: 4, image: '', description: 'Pellentesque suscipit, lacus eget hendrerit suscipit, dui augue eleifend lectus, ut semper neque nisl at lacus. Donec elementum urna ac odio vulputate euismod.'},
    {id: 5, image: '', description: 'Proin ante tortor, eleifend ut risus tristique, eleifend imperdiet justo. Nulla iaculis odio mauris, ut ullamcorper tellus ullamcorper eget.'},
    {id: 6, image: '', description: 'Sed purus nunc, posuere at maximus molestie, pulvinar vel justo. Aenean consequat urna lorem, in consequat elit scelerisque a.'},
    {id: 7, image: '', description: 'Suspendisse commodo iaculis sapien, eget suscipit nisl fringilla sed. Integer dapibus pulvinar sem. Pellentesque sit amet velit a velit sollicitudin consequat. Pellentesque vitae enim blandit orci viverra semper. Nullam ac libero varius, venenatis risus ut, suscipit ante.'},
    {id: 8, image: '', description: 'Magna elit, congue quis ante at, eleifend rutrum odio.'},
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
    <div class="flex flex-col space-y-4 pt-20 pb-48 bg-gray-200">
        <div className="text-center px-10 mb-10">
            <h1 class="text-5xl mt-6 font-light">Take a look of <span class="font-bold text-sky-800">My Work</span></h1>
            <p class="mt-5 text-2xl">Up until this point my entire freelance/professional work has been created for Latin America companies and individuals only, for that reason you’re going to notice that all the projects are on Spanish. I just use English for my own personal projects.</p>
        </div>

        <div className="flex flex-row justify-center">
          <button className="embla__prev" onClick={scrollPrev}>
            <MdKeyboardArrowLeft size={'4rem'} />
          </button>
          <div class={styles.embla}>
            <div className="embla__viewport" ref={emblaRef}>
              <div class={styles.embla__container}>
                {items && items.map(el => 
                  <div
                    key={el.id}
                    // class="bg-white mx-5 shadow-lg p-5" 
                    className={`bg-white mx-3 shadow-xl px-5 py-4 grid grid-cols-1 content-center text-center ${styles.embla__slide}`}
                    >
                    <p>
                      {el.description}
                    </p>
                    <div className="mt-5">
                      <button class="py-3 px-14 bg-zinc-800 text-white text-lg">Visit</button>
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