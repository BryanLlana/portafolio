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

export const loader = async () => {
  return [{
    id: 1,
    titulo: "Pagina de Salón de Belleza",
    enlace: "https://bryanllana.github.io/pagina_bella",
    imagen: "salon.png"
  }, {
    id: 2,
    titulo: "App de Presupuesto",
    enlace: "https://bryanllana.github.io/presupuesto-react",
    imagen: "presupuesto.png"
  }, {
    id: 3,
    titulo: "App Cotizador",
    enlace: "https://bryanllana.github.io/cotizador-react",
    imagen: "cotizador.png"
  }, {
    id: 4,
    titulo: "App Clima",
    enlace: "https://bryanllana.github.io/clima-react",
    imagen: "clima.png"
  }]
}

const Portafolio = () => {
  const proyectos = useLoaderData();

  return (
    <Proyectos>
      <Titulo>Mis Proyectos</Titulo>
      <Contenedor>
        {proyectos.map(proyecto => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </Contenedor>
    </Proyectos>
  )
}

export default Portafolio