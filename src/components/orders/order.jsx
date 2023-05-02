import React from "react";
import { FaTrash } from "react-icons/fa";
import style from "./../orders/style.css";

const Order = (props) => {
  const { item, onDelete } = props;

  return (
    <div className="item">
      <img src={"./img/" + item.img} />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <FaTrash className="delete" onClick={() => onDelete(item.id)} />
    </div>
  );
};

export default Order;
