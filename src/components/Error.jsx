import styled from '@emotion/styled'

const Div = styled.div`
    background-color: #ff4040;
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
    font-weight: 500;
`

const Error = ({children}) => {
  return (
    <Div>{children}</Div>
  )
}

export default Error