import React from "react";
import { product } from "../products";

export function Image() {
  return <img src={product.image} alt="" />;
}
