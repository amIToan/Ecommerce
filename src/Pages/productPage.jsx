import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import { mobile } from "../responsive";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const Productpage = () => {
  let { params } = useParams()
  const [filter, setFilter] = useState({});
  const handleFilters = (e) => {
    setFilter({
      ...filter,
<<<<<<< HEAD
      [e.target.name]: e.target.value,
    })
  };
  const [sort, setSort] = useState("Newest")
  return (
    <Container>
      <Announcement />
      <Title>Dresses</Title>
=======
      [e.target.name]: e.target.value.toLowerCase(),
    })
  };
  const [sort, setSort] = useState("newest")
  return (
    <Container>
      <Announcement />
      <Title>{params ? params : "Dresses"}</Title>
>>>>>>> master
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="options" onChange={handleFilters}>
<<<<<<< HEAD
            <Option disabled defaultValue>
=======
            <Option value={""} defaultValue>
>>>>>>> master
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="sizes" onChange={handleFilters}>
<<<<<<< HEAD
            <Option disabled defaultValue>
=======
            <Option value={""} defaultValue>
>>>>>>> master
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
<<<<<<< HEAD
          <Select name="sort" onChange={e => setSort(e.target.value)}>
=======
          <Select name="sort" onChange={e => setSort(e.target.value.toLowerCase())}>
>>>>>>> master
            <Option defaultValue value={"newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={params} filter={filter} sort={sort} />
    </Container>
  );
};

export default Productpage;
