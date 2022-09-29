import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'
import axios from 'axios'
import { publicRequest } from "../requestMethods";
import { addProduct } from "../reduxx/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div({
})

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div({
    flex:"1",
   
})

const Image = styled.img`
    width:500px;
    height:650px;

`

const InfoContainer = styled.div`
    margin-top: 35px;
    margin-left:20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1({
    fontSize:"55px",
    fontWeight:"200"
})

const Desc = styled.p({
    fontSize:"20px",
    margin:"20px 0px"
})

const Price = styled.span({
    fontSize:"35px"
})


const FilterContainer = styled.div({
    width:"50%",
    margin:"50px 0px",
    display:"flex",
    justifyContent:"space-between",

})

const Filter = styled.div({
    display:"flex",
    alignItems:"center"
})

const FilterTitle = styled.span({
    fontSize:"20px",
    fontWeight:"300"
})

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 7px;
  cursor: pointer;
`;

const FilterSize = styled.select({
    marginLeft:"10px",
    padding:"8px",
    fontWeight:"600",
    fontSize:"17px"
})

const FilterSizeOption = styled.option({
    fontWeight:"600",
    fontSize:"15px"
})

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;


const Amount = styled.span({
    fontFamily:"fantasy",
    width:"30px",
    height:"30px",
    borderRadius:"10px",
    border:"1px solid teal",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    margin:"0px 10px"

})

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 600;

    &:hover{
         background-color: #AACE75;
    ;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()







    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            }catch{}
        };
        getProduct()
    },[id]);


    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity >1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }

    const handleClick = () => {
        dispatch(
          addProduct({ ...product, quantity, color, size })
        );
      };

      
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>

        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>

            <InfoContainer>
                <Title>{product.title}</Title>

                <Desc>
                    {product.desc}
                </Desc>
                <Price> $ {product.price}</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                      {product.color?.map(c=>(<FilterColor color={c} key={c} onClick={()=>setColor(c)} />))} 
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize  onChange={(e)=>setSize(e.target.value)} >
                            {product.size?.map(s=>(<FilterSizeOption key={s}>{s}</FilterSizeOption>))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <button onClick={()=> handleQuantity("dec") }>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                        <Amount>{quantity}</Amount>
                        <button onClick={()=> handleQuantity("asc") } >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>


            </InfoContainer>
        </Wrapper>

        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default Product