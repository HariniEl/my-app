import React from "react";

export default function ProductListItem(props) {
  return (
    <div className="">
      <div className="m-4 align-items-center justify-content-center">
        <img
          src={props.thumbnail}
          alt={props.title}
          height={150}
          width={180}
          className="border-radius-9"
        />
        <h5 className="card-title me-4">{props.title}</h5>
        <h6 className="mt-2 me-4">Price: {`Rs.${props.price}`}</h6>
        <h6 className="mt-2 me-4">discount: {props.discountPercentage}%</h6>
        <h6 className="mt-2 me-4">Rating: {props.rating}</h6>
        <button className="btn btn-danger ms-3" onClick={props.incrementItem}>+</button>
        <span className="ms-3">Quantity {props.count} </span>
        <button className="btn btn-danger ms-3" onClick={props.decrementItem}>-</button>
        <button className="btn btn-danger ms-3" onClick={props.removeItem}>Remove</button>
      </div>
    </div>
  );
}