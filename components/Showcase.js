function Showcase({title, skills}) {
  return (
    <div class="bg-white drop-shadow-lg w-full p-6 text-center">
        <h3 class="text-3xl font-regular text-sky-900">{title}</h3>
        <div class="flex flex-col space-y-4 px-8 text-lg mt-6">
            {skills && skills.map(el => 
                <p>{el.description}</p>
            )}
        </div>
    </div>
  )
}

export default Showcase