import Image from "next/image"

function Showcase({title, skills}) {
  return (
    <div className="bg-white drop-shadow-lg w-full px-6 py-10 text-center">
        <h3 className="text-3xl font-regular text-sky-900">{title}</h3>
        <div className="flex flex-col space-y-4 px-2 text-lg mt-6">
            
            {skills && skills.map((el, i) => 
              <div key={i}>
                <Image 
                  src={`/../public/techbrands/${el.thumbnail}`}
                  width={200}
                  height={200}
                  alt="" />
                <p>{el.description}</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Showcase