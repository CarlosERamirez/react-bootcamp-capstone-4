import React from "react";
import logo from "../logo.svg";
import { BsCartFill } from 'react-icons/bs';

export default function Header() {
  function addToCart() {}
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <input placeholder="My input" />
      <BsCartFill onClick={addToCart} />
    </header>
  );
}
