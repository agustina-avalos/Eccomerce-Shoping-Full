import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from "../responsive";

const Container = styled.div({
})

const Title = styled.h1({
    margin:"20px"
})

const FilterContainer = styled.div({
    display:"flex",
    justifyContent:"space-between",
})


const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 40px", display: "flex", flexDirection: "column" })}
`;


const FilterText = styled.div({
    fontSize:"20px",
    fontWeight:"600",
    marginRight:"20px"
})


const Select = styled.select({
    padding:"10px",
    fontWeight:"600",
    marginRight:"20px"
})

const Option = styled.option({
    fontSize:"14px",
    fontWeight:"600"

})




const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filter, SetFilter] = useState({})
    const [sort, setSort] = useState("newest")


    const handleFilters = (e)=>{
        const value = e.target.value;
        SetFilter({
            ...filter,
            [e.target.name] : value
        })        
    }

   /*  const handleSort  = (e)=>{
        const value = e.target.value;
        setSort({

        })
    }
 */

  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Title>{cat}</Title>
        
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product:</FilterText>
                <Select  name = "color" onChange={handleFilters}>
                    <Option disabled> Color </Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select  name = "size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=> setSort(e.target.value)}>
                    <Option value = "newest">Newest</Option>
                    <Option value = "asc" >Price (asc)</Option>
                    <Option value = "desc" >Price (desc)</Option>
                </Select>
        </Filter>
        
        </FilterContainer>
        <Products cat={cat} filter={filter}  sort ={sort}></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>

    </Container>
  )
}

export default ProductList