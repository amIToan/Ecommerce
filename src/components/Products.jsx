import Product from "./product";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        if (response.data) {
          setProducts(response.data);
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    if (filter && (filter.options != "" || filter.sizes != "")) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [filter]);
  useEffect(() => {
    if (sort == "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createAt - a.createAt)
      );
      setProducts((prev) => [...prev].sort((a, b) => b.createAt - a.createAt));
    } else if (sort == "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.length > 0
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
