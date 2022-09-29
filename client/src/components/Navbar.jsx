import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;


const Left = styled.div({
   flex:"1",
   display:"flex",
   alignItems:"center"

})

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div({
    border: "0.5px , solid, lightgrey",
    display:"flex",
    alignItems:"center",
    marginLeft:"25px",
    padding:"5px",
    fontSize: "20px",
    fontWeight:"bold"
})

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div({
    flex:"2",
    fontSize: "20px",
    fontWeight:"bold",
    textAlign:"center"
})

const Logo = styled.h1`
  margin-top: 5px;
  font-weight: bold;
  ${mobile({ fontSize: "22px", marginTop:"-10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuIten = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
 
const Navbar = () => {
  return (
    <Container>
        <Wrapper>

            <Left>  
                <Language>ES</Language> 
                <SearchContainer>
                    <Input></Input>
                    <i class="fa-solid fa-magnifying-glass" style={{color:"gray", fontSize:"18px"}}></i>
                </SearchContainer>
            </Left>


            <Center><Logo>AGUSTINA-APP</Logo></Center>

            <Right>
              <Link to="/register">
                <MenuIten>Registrate</MenuIten>
              </Link>
              <Link to="/login"> 
                <MenuIten>Entrar</MenuIten>
              </Link>
                <Link to="/cart">
                   <MenuIten>
                       <i class="fa-solid fa-cart-shopping"></i>
                  </MenuIten>
                </Link>
               
               
            </Right>


        </Wrapper>
    </Container>
  )
}

export default Navbar