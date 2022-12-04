import styled from '@emotion/styled'
import Imagen from '../../public/img/programador.png'

const Bio = styled.div`
  background-color: var(--fondo);
  padding: 5rem 0;
`

const Titulo = styled.h1`
  text-align: center;
  font-weight: 800;
  color: var(--primario);
  margin: 0 0 3rem 0;
`

const Contenedor = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`

const Image = styled.div`
  width: 300rem;
  height: 44.5rem;
`

const Contenido = styled.div`
  font-weight: 500;
  font-size: 1.7rem;
  text-align: justify;
`

const Biografia = () => {
  return (
    <Bio>
      <Titulo>Mi Biografía</Titulo>
      <Contenedor>
        <Image>
          <img src={Imagen}/>
        </Image>
        <Contenido>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui voluptatem fugiat eos! Voluptatem eius, nam voluptates repellat eos molestias veniam, eum pariatur illo soluta suscipit quo mollitia, et quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo quaerat cum. Quam incidunt cumque ab unde corrupti ex sunt hic harum adipisci fugiat, facilis dolorem earum dolore aliquid nihil.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, animi! Amet molestiae modi, ad consectetur voluptas fugiat molestias vitae tenetur, tempore tempora sit totam facere soluta voluptates excepturi harum assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, similique tempora! Quo sunt accusantium dolores ex, fugit error temporibus rerum doloremque ipsa sed eos sit quasi, delectus magnam in inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro commodi fugit quidem accusantium, optio, illum, doloribus labore cumque eum veniam temporibus. Quisquam, totam iure magni atque architecto magnam sunt!</p>
        </Contenido>
      </Contenedor>
    </Bio>
  )
}

export default Biografia