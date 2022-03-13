import Product from "./product";
import { popularProducts } from "../data";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios'
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({cat, filter , sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect( ()=> {
    const getProducts = async()=> {
      try {
      const response = await axios.get("http://localhost:5000/api/products")
      } catch (error) {
        
      }
    }
    getProducts();
  },[cat, filter , sort])
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
