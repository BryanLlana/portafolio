import { Link, useLocation } from "react-router-dom"
import styled from '@emotion/styled'

const Cabecera = styled.header`
  background-color: var(--primario);
  padding: 2rem 0;
`

const Contenedor = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  & .enlace{
    text-decoration: none;
    color: var(--fondo);
    font-weight: 500;
    font-size: 1.8rem;
    padding: .5rem;
  }

  & .enlace:hover{
    color: #000;
  }

  & .active{
    background-color: var(--secundario);
    border-radius: .5rem;
    font-weight: 800;
    color: #000;
  }
`

const Header = () => {
  const {pathname} = useLocation();

  return (
    <Cabecera>
      <Contenedor>
        <Link to='/' className={`enlace ${pathname === '/' ? 'active' : ''}`}>Inicio</Link>
        <Link to='/biografia' className={`enlace ${pathname === '/biografia' ? 'active' : ''}`}>Sobre Mí</Link>
        <Link to='/portafolio' className={`enlace ${pathname === '/portafolio' ? 'active' : ''}`}>Portafolio</Link>
        <Link to='/contacto' className={`enlace ${pathname === '/contacto' ? 'active' : ''}`}>Contactarme</Link>
      </Contenedor>
    </Cabecera>
  )
}

export default Header