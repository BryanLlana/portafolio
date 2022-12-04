import { Link } from "react-router-dom"
import styled from '@emotion/styled'

const Pie = styled.footer`
  background-color: var(--primario);
  padding: 3rem 0;
`

const Contenedor = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .enlace{
    text-decoration: none;
    color: var(--fondo);
    font-weight: 500;
    font-size: 1.8rem;
    padding: .5rem;
    margin-right: 3rem;
  }

  & .enlace:last-of-type{
    margin-right: 0;
  }

  & .enlace:hover{
    color: #000;
  }
`

const Copyright = styled.p`
  color: var(--fondo);
  font-weight: 500;
  font-size: 1.7rem;
  margin: 0;
`

const Footer = () => {
  return (
    <Pie>
      <Contenedor>
        <div>
          <Link to='/' className={`enlace`}>Inicio</Link>
          <Link to='/biografia' className={`enlace`}>Sobre Mí</Link>
          <Link to='/portafolio' className={`enlace`}>Portafolio</Link>
          <Link to='/contacto' className={`enlace`}>Contactarme</Link>
        </div>
        <Copyright>&#169; Copyright - Hecho por Bryan Tito Llana</Copyright>
      </Contenedor>
    </Pie>
  )
}

export default Footer