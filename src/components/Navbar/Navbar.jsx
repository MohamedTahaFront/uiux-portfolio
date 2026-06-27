import { useEffect, useState } from 'react';
import './Navbar.css'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';

function Navbar({nav}) {
  const [menu , setMenu] = useState(false)

// ----------Scroll-----------//
  const [top , setTop] = useState(false)
  useEffect(()=>{
    const handleTop = ()=>{
      setTop(window.scrollY > 100)
    }
    window.addEventListener("scroll" , handleTop)

    return ()=> window.removeEventListener("scroll" , handleTop)
  },[])
  return (
    <>
      <div className={`Navbar ${top?'active' : ''}`}>
        <div className="container">
          <div className="box">
            <RiMenu2Fill onClick={()=>setMenu(!menu)} className={`menu ${menu ? "active" : ""}`} />
            <a className='logo fs-2' href="#"><span>B</span>Brooklyn</a>
          </div>

          <div className="box">
            <ul className={`links ${menu ? "active" : ""}`}>
              <li><HashLink to={"/#header"} className={`link ${nav === "header" ? "active" : ""}`}>Home</HashLink></li>
              <li><HashLink to={"/#about"} className={`link ${nav === "about" ? "active" : ""}`}>About</HashLink></li>
              <li><HashLink to={"/#process"} className={`link ${nav === "process" ? "active" : ""}`}>Process</HashLink></li>
              <li><HashLink to={"/#portfolio"} className={`link ${nav === "portfolio" ? "active" : ""}`}>Portfolio</HashLink></li>
              <li><HashLink to={"/#blog"} className={`link ${nav === "blog" ? "active" : ""}`}>Blog</HashLink></li>
              <li><HashLink to={"/#services"} className={`link ${nav === "services" ? "active" : ""}`}>Services</HashLink></li>
            </ul>
              <HashLink to={"/#contact"} className='btn btn-primary' >Contact</HashLink>
          </div>
        </div>
      </div>
      <button className={`top ${top ? 'active' : ''}`} onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})}><FaAngleUp/></button>
    </>
  )
}

export default Navbar