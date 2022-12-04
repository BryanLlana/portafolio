import styled from '@emotion/styled'

const Div = styled.div`
    background-color: #71c55b;
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
    font-weight: 500;
`

const Exito = ({children}) => {
  return (
    <Div>{children}</Div>
  )
}

export default Exito