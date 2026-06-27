import { useEffect, useRef } from "react";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Happy from "../components/Happy/Happy";
import Header from "../components/Header/Header";
import Idea from "../components/Idea/Idea";
import Portfolio from "../components/Portfolio/Portfolio";
import Process from "../components/Process/Process";
import Services from "../components/Services/Services";

function Home({setNav}) {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);


  useEffect(()=>{
    const handleNav = ()=>{
      const trigger = window.innerHeight / 2

      const servicesRect = servicesRef.current.getBoundingClientRect()
      const blogRect = blogRef.current.getBoundingClientRect()
      const portfolioRect = portfolioRef.current.getBoundingClientRect()
      const processRect = processRef.current.getBoundingClientRect()
      const aboutRect = aboutRef.current.getBoundingClientRect()
      const headerRect = headerRef.current.getBoundingClientRect()


      if (servicesRect.top <= trigger && servicesRect.bottom > trigger ) {
        setNav("services")
      }else if (blogRect.top <= trigger && blogRect.bottom > trigger ) {
        setNav("blog")
      }else if (portfolioRect.top <= trigger && portfolioRect.bottom > trigger ) {
        setNav("portfolio")
      }else if (processRect.top <= trigger && processRect.bottom > trigger ) {
        setNav("process")
      }else if (aboutRect.top <= trigger && aboutRect.bottom > trigger ) {
        setNav("about")
      }else if (headerRect.top <= trigger && headerRect.bottom > trigger ) {
        setNav("header")
      }
    }

    window.addEventListener("scroll" , handleNav);
    handleNav()
    return ()=> window.removeEventListener("scroll" , handleNav);
  },[setNav])
  return (
    <>
      <section ref={headerRef} id="header">
        <Header />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={processRef} id="process">
        <Process />
      </section>
      <section ref={portfolioRef} id="portfolio">
        <Portfolio />
      </section>
      <Idea />
      <section ref={blogRef} id="blog">
        <Blog />
      </section>
      <section ref={servicesRef} id="services">
        <Services />
      </section>
      <Happy />
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
