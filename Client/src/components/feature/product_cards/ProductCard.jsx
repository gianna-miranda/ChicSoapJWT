import React from "react";
import './modal.css'
//declaring 
const ProductCard = ({id, title, price, Description}) => {
  return (
    <>
      <div   className={`${id}`}>
        <p className="trynaH" >{title}</p>
        <p className="trynaH">{price}</p>
        <p className="trynaH">{Description}</p>
      </div>
    </>
  )
}

export default ProductCard;
