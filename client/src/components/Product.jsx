import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

/* const Container = styled.div({
    flex:"1",
    margin:"5px",
    minWidth:"280px",
    height:"350px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F0D9B7",
    position:"relative",

    &:hover {

    }


}) */


const Info = styled.div({
    opacity:"0",
    width:"100%",
    height:"100%",
    position:"absolute",
    top:"0",
    left:"0",
    backgroundColor:"rgba(0, 0, 0, 0.2)",
    zIndex:"3",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    transition:"all 0.5s ease"
    
})



const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0D9B7;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;


const Circle = styled.div({
    width:"200px",
    height:"200px",
    borderRadius:"50%",
    backgroundColor:"white",
    position:"absolute"



})

const Img = styled.img({
    height:"75%",
    zIndex:"2"
})


const Icon = styled.div`

    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:20px;
    font-size:20px;
    transition: all 0.5s ease;
    

    &:hover{
        background-color: #AACE75;
        transform: scale(1.3) 
    }

   
`


const Product = ({p}) => {
  return (
    <Container>
        <Circle/>
        <Img src={p.img}/> 
        <Info>
            <Icon>
                <i class="fa-solid fa-cart-shopping"></i>
            </Icon>
            <Icon>
                <Link to = {`/product/${p._id}`}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
            </Icon>
            <Icon>
                <i class="fa-solid fa-heart"></i>
            </Icon>

        </Info>
        
      
    </Container>
  )
}

export default Product