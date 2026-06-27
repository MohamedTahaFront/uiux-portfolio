import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function Layout({nav}) {
  return (
    <>
    <Navbar nav={nav} />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout