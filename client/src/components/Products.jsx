import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from "axios"

const Container = styled.div({
    padding:"20px",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between"


})

const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts , setFilteredProduct] = useState([])



  useEffect(()=>{
    const getProduct = async ()=>{
      try{
        const res = await axios.get(cat? 
          `http://localhost:5000/api/products?category=${cat}` 
          : "http://localhost:5000/api/products");
        setProducts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getProduct()
  },[cat])


  useEffect(()=>{
    cat && setFilteredProduct(
      products.filter((item)=>
        Object.entries(filter).every(([key, value])=>
        item[key].includes(value)
        )
      )
    )

  },[products,cat,filter])

  useEffect(()=>{

    if(sort === "newest"){
      setFilteredProduct((prev)=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      );
    }else if(sort === "asc"){
      setFilteredProduct((prev)=>
        [...prev].sort((a,b)=> a.price - b.price)
      )
    }else{
      setFilteredProduct((prev)=>
        [...prev].sort((a,b)=> b.price - a.price)
      );
    }

  },[sort])


  return (
    <Container>
        {cat ? filteredProducts.map(p=> (<Product  p= {p} key={p.id}/>)) 
          : 
          products.slice(0,8).map(p=> (<Product  p= {p} key={p.id}/>)) 
        }
    </Container>
  )
}

export default Products