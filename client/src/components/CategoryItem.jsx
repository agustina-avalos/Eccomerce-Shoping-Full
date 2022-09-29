import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;


const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;


const Info= styled.div({
    position: "absolute",
    top:"0",
    left:"0",
    width: "100%",
    height:"100%",
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center"

})

const Title = styled.h1({
    fontSize:"40px",
    fontWeight:"bold",
    marginBottom:"20px",
    color:"white",
    border:"1px solid black"

})

const Button = styled.button({
    fontWeight:"bold",
    border:"none",
    padding:"10px",
    color:"gray",
    cursor:"pointer"

})


const CategoryItem = ({i}) => {
  return (
    <Container>
      <Link to = {`/products/${i.cat}`}>
        <Img src={i.img} />
        <Info>
            <Title> {i.title} </Title>
            <Button>SHOP NOW! </Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem