import React from "react";
import { BiWindowClose } from "react-icons/bi";
import style from "./../showfullitem/style.css";

const ShowFullItem = (props) => {
  const { item, onShowItem, onAdd } = props;

  return (
    <div className="full-item">
      <div>
        <div onClick={() => onShowItem(item)} className="button">
          <BiWindowClose />
        </div>
        <img src={"./img/" + item.img} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className="add" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
