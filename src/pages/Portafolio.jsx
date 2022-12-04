import styled from "@emotion/styled"
import axios from "axios"
import { useLoaderData } from "react-router-dom"
import Proyecto from "../components/Proyecto"

const Proyectos = styled.div`
  background-color: var(--fondo);
  padding: 5rem 0;
`

const Titulo = styled.h1`
  text-align: center;
  font-weight: 800;
  color: var(--primario);
  margin: 0 0 3.5rem 0;
`

const Contenedor = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;
`

export const loader = async() => {
  try {
    const {data: {proyectos}} = await axios('../../db.json')
    return proyectos
  } catch (error) {
    console.log(error)
  }
}

const Portafolio = () => {
  const proyectos = useLoaderData();

  return (
    <Proyectos>
      <Titulo>Mis Proyectos</Titulo>
      <Contenedor>
        {proyectos.map(proyecto => (
          <Proyecto key={proyecto.id} proyecto={proyecto}/> 
        ))}
      </Contenedor>
    </Proyectos>
  )
}

export default Portafolio