import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div({
  height:"60vh",
  backgroundColor:'#ECF0DB',
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column"


})

const Title = styled.h1`
  font-size:70px;
  margin-bottom:20px;
  ${mobile({ fontSize:"50px" })}

  `


const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize:"18px", marginBottom:"5px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;



const Input = styled.input({
  border:"none",
  flex:"8",
  paddingLeft:"20px"



})

const Button = styled.button({
  flex:"1",
  border:"none",
  backgroundColor:"#AACE75",
  fontSize:"20px",
  cursor:"pointer"
 
})



const Newsletter = () => {
  return (
   <Container>
       <Title>Newsletter</Title>
       <Description>Get timely updates from your favorite products.</Description>
       <InputContainer>
            <Input placeholder='you email' />
            <Button>
              <i class="fa-solid fa-paper-plane" ></i>
            </Button>
       </InputContainer>
   </Container>
  )
}

export default Newsletter