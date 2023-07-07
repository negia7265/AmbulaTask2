import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import ProductList from "./components/ShoppingCart/ProductList";
import Announcement from "./components/ShoppingCart/Announcement";
import Newsletter from "./components/ShoppingCart/Newsletter";
import Product from "./components/ShoppingCart/Product";
import { Weather } from "./components/Weather/Weather";
import Cart from "./components/ShoppingCart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/todoapp" element={<App />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productlist/product/:id" element={<Product />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
