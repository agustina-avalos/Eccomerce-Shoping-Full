import styled from "styled-components"

const Container = styled.div({
    height:"30px",
    backgroundColor:"teal",
    color:"white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"14px",
    fontWeight:"500"
})

const Announcement = () => {
  return (
    <Container>
       ¡Gran oferta! Envío gratis en pedidos superiores a $2000
    </Container>
  )
}

export default Announcement