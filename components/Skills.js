import { useState } from "react"
import Showcase from "./Showcase"

function Skills() {
    const [skillsKit, setSkillsKit] = useState([
        {title: 'Backend', skills: [
            {thumbnail: 'php.png', description: `I have +5 years of experience with this language. I've been using it for many enterprises, freelancing, and personal projects. I use Laravel as my primary full-stack framework.`},
            {thumbnail: 'nodejs.png', description: `Powerful tool, that I use pretty much for my personal projects and it powers this website where you’re now!`},
            {thumbnail: 'databases.png', description: `I can work with SQL or Non-SQL databases. Having the most of my expertise using MySQL, SQLite, Postgress, Firestore, Mongo DB.`},
        ]},
        {title: 'Frontend', skills: [
            {thumbnail: 'javascript.png', description: 'My principal language, I’ve been working with it for the last six years now, and I’ve used it in all of my projects, both personal and business.'},
            {thumbnail: 'reactjs.png', description: `React it's my favorite front-end tool, and I also like to work with Next JS, this portfolio website was built with them.`},
            {thumbnail: 'vuejs.png', description: `Vue JS was my first front-end framework, and I like to work with it on small personal projects.`},
        ]},
        {title: 'Tools', skills: [
            {thumbnail: 'firebase.png', description: `Firebase's my favorite service, I use it for many use-cases, like push notifications, databases, and cloud functions. The auth feature is what I use the most.`},
            {thumbnail: 'adobexd.png', description: `Worked many years with business and personal clients, automating their processes. I've been getting enough experience to build UX/UI for each project I work on. My favorite tool is Adobe XD, but I can work with Figma as well.`},
            {thumbnail: 'github.png', description: `Github the programmer's best friend.`},
        ]},
        {title: 'Others', skills: [
            {thumbnail: 'tailwindcss.png', description: `I have plenty of experience working with CSS frameworks, my favorites are Tailwind CSS and Bootstrap. But I can work with Vanilla CSS if it's needed.`},
            {thumbnail: 'flutter.png', description: `I'm trying to get into the mobile development world, I know the basics of Flutter and React Native.`},
            {thumbnail: 'python.png', description: `I know python, but I am interested in using it for task automatization instead of web development, I know the basics of Django as well.`},
        ]}
    ])
  
    return (
    <div id="skills" className="bg-sky-900 p-10">
        <h1 className="text-5xl text-white font-light text-center p-6">Detailing more  
            <span className="font-bold"> about my skills</span>
        </h1>

        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-4">
            {skillsKit && skillsKit.map(el => 
                <Showcase title={el.title} skills={el.skills} />
            )}
        </div>

        <div className="flex flex-row justify-center mt-10 space-x-4 md:space-x-10">
            <a href="https://github.com/cleibertmora" target="_blank" className="py-3 px-14 bg-zinc-800 text-white text-lg hover:bg-zinc-700">GitHub</a>
            <a href="https://www.linkedin.com/in/cleibertmora" target="_blank" className="py-3 px-14 bg-zinc-800 text-white text-lg hover:bg-zinc-700">Linkedin</a>
        </div>
    </div>
  )
}

export default Skills