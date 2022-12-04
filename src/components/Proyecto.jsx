import styled from "@emotion/styled";

const ContenedorProyecto = styled.div`
    background-color: var(--terciario);
    border-radius: .5rem;
`

const Contenido = styled.div`
    padding: 3rem 0;
    text-align: center;
    
    & h3{
        margin: 0;
        margin-bottom: 3rem;
    }

    & a{
        text-decoration: none;
        background-color: var(--secundario);
        padding: 1rem 3rem;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: .5rem;
        color: #000;
    }

    & a:hover{
        background-color: var(--fondo);
        font-weight: 800;
    }
`


const Proyecto = ({ proyecto }) => {
    const {titulo, enlace, imagen} = proyecto;

    return (
        <ContenedorProyecto>
            <div>
                <img src={`./img/${imagen}`} alt="" />
            </div>
            <Contenido>
                <h3>{titulo}</h3>
                <a href={enlace}>Ver Proyecto</a>
            </Contenido>
        </ContenedorProyecto>
    )
}

export default Proyecto