import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 80px;
  background-color: white;
  color: black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  border-color: white;
`;
const Logo = styled.h2`
  font-weight: bold;
`;

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <MenuItem>
            <h3>Home</h3>
          </MenuItem>
          <MenuItem>
            <Link
              to="/todoapp"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>To Do App</h3>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/productlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>Shopping Cart</h3>
            </Link>
          </MenuItem>
          {/* <Center>
            <Logo>Ambula React App</Logo>
          </Center> */}
          <MenuItem>
            <Link
              to="/weather"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>Weather</h3>
            </Link>
          </MenuItem>
          <MenuItem>
            <h3>Contact</h3>
          </MenuItem>
          <Right>
            <MenuItem>
              <Link to="/cart">
                {/* <Badge badgeContent={quantity} color="primary"> */}
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
}
