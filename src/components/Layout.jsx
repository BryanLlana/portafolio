import { Outlet, useNavigate } from "react-router-dom"
import usePortafolio from "../hooks/usePortafolio";
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  const {autenticacion} = usePortafolio();
  const navigate = useNavigate();

  const validar = () => {
    if(!autenticacion){
      navigate('/login')
    }
  }

  return (
    <>
    {validar()}
    <Header />
    <Outlet/> 
    <Footer />
    </>
  )
}

export default Layout