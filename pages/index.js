import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'

export default function Home() {
  return (
    <>
      <Head>
        <title>Full-Stack Web Developer | JavaScript - PHP | UX/UI Expert | Focused on bring solutions 🤝</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Full-Stack Web Developer | JavaScript - PHP | UX/UI Expert | Focused on bring solutions 🤝" key="title" />
        <meta property="og:title" content="Full-Stack Web Developer | JavaScript - PHP | UX/UI Expert | Focused on bring solutions 🤝" key="title" />
        <meta name="description" content="Learn how to write amazing meta descriptions that'll engage readers, optimize your page, and help you rank higher on search engines. "/>
        <meta property="og:description" content="My name is Cleibert, it will be a pleasure to meet you if you wish. I am a developer with +5 years of experience developing websites, business management systems and using differents digital tools."/>
        <meta name="author" content="Cleibert Mora"/>
        <meta name="keyworks" content="Programmer, Developer, JavaScript Developer, React JS, Remote, Firebase, Laravel"/>

      </Head>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <MobileMenu />
    </>
  )
}
