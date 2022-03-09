import Catergoryitems from "./CatergoryItems";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Catergories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Catergoryitems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Catergories;
