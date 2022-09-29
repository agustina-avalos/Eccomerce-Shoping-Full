import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import  {login } from '../reduxx/apiCall';
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
    width: 35%;
    padding: 20px;
    background-color : #F7CBC7;
    ${mobile({ width: "64%" })}
    ;



`
const Title = styled.h1`
    font-size:24px;
    font-weight: 600;


`
const Form = styled.form`
    display:flex;
    flex-direction: column;
`   
const Input = styled.input({
    flex:"1",
    minWidth:"40%",
    margin:"10px 0px",
    padding:"15px"
})
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
`;
const Error = styled.span`
  color: red;
`;


const Login = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching ,error} = useSelector((state)=> state.user)




  const handleClick = (e)=>{
        e.preventDefault();
    login(dispatch, {userName,password})

  }

  return (
    <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"  onChange={(e)=>setUserName(e.target.value)}/>
                <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          
                <Button onClick={handleClick} disabled={isFetching}> LOGIN </Button>
                {error && <Error>Something went wrong...</Error>}

                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        
    </Container>
  )
}

export default Login