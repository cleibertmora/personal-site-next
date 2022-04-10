import { useState } from "react"
import Showcase from "./Showcase"

function Skills() {
    const [skillsKit, setSkillsKit] = useState([
        {title: 'Languages', skills: [
            {description: 'Definitely my main language, I’ve been working with it for the last 4 years now, I’ve used in all of my projects, both personal and enterprise.'},
            {description: 'Not my best choice, but I’ve been working with it a lot, mostly in my freelance and enterprise journeys.'},
            {description: 'I know Node JS is not a language itself but a powerful tech though, that I use pretty much for my personal projects and it powers this very website where you’re now!'},
        ]},
        {title: 'Frameworks', skills: [
            {description: 'Definitely my main language, I’ve been working with it for the last 4 years now, I’ve used in all of my projects, both personal and enterprise.'},
            {description: 'Not my best choice, but I’ve been working with it a lot, mostly in my freelance and enterprise journeys.'},
            {description: 'I know Node JS is not a language itself but a powerful tech though, that I use pretty much for my personal projects and it powers this very website where you’re now!'},
        ]},
        {title: 'Tools', skills: [
            {description: 'Definitely my main language, I’ve been working with it for the last 4 years now, I’ve used in all of my projects, both personal and enterprise.'},
            {description: 'Not my best choice, but I’ve been working with it a lot, mostly in my freelance and enterprise journeys.'},
            {description: 'I know Node JS is not a language itself but a powerful tech though, that I use pretty much for my personal projects and it powers this very website where you’re now!'},
        ]},
        {title: 'Learning', skills: [
            {description: 'Definitely my main language, I’ve been working with it for the last 4 years now, I’ve used in all of my projects, both personal and enterprise.'},
            {description: 'Not my best choice, but I’ve been working with it a lot, mostly in my freelance and enterprise journeys.'},
            {description: 'I know Node JS is not a language itself but a powerful tech though, that I use pretty much for my personal projects and it powers this very website where you’re now!'},
        ]}
    ])
  
    return (
    <div class="bg-sky-900 p-10">
        <h1 class="text-5xl text-white font-light text-center p-6">Detailing more  
            <span class="font-bold"> about my skills</span>
        </h1>

        <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:space-x-4">
            {skillsKit && skillsKit.map(el => 
                <Showcase title={el.title} skills={el.skills} />
            )}
        </div>

        <div class="flex flex-row justify-center mt-10 space-x-4 md:space-x-10">
            <button class="py-3 px-14 bg-zinc-800 text-white text-lg">GitHub</button>
            <button class="py-3 px-14 bg-zinc-800 text-white text-lg">Linkedin</button>
        </div>
    </div>
  )
}

export default Skills