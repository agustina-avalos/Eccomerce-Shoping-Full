import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #EDE2C3;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

`;


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  background-color: #EDE2C3;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div({
    height:"100%",
    flex:"1"
    
})

const Img = styled.img({
    height:"80%"

})

const InfoContainer = styled.div({
    flex:"1",
    padding:"60px"
    
})

const Title = styled.h2({
    fontSize:"70px"
})

const Desc = styled.p({
    margin:"50px 0px",
    fontSize:"20px",
    fontWeight:"bold", 
    letterSpacing:"3px"
})

const Button = styled.button({
    padding: "10px",
    fontWeight:"bold",
    fontSize:"17px",
    backgroundColor:"transparent",
    cursor:"pointer"
})


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)


    const handleClick = (direction)=>{
            if(direction === "left"){
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
            }else{
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            }
    }




  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}> 
            <i class="fa-solid fa-arrow-left-long"></i> 
        </Arrow>

        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map(i=> (
                 <Slide bg={i.bg} key= {i.id}> 

                    <ImgContainer>
                         <Img src={i.img}/>
                     </ImgContainer>

                    <InfoContainer>
                        <Title>{i.title}</Title>
                        <Desc>{i.desc}</Desc>
                        <Button>COMPRAR AHORA</Button>
                    </InfoContainer>

             </Slide>

            ))}
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}> 
            <i class="fa-solid fa-arrow-right-long"></i>
        </Arrow>
    </Container>
  )
}

export default Slider