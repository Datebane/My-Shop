import React from "react";
import Item from "./item/item";
import style from "./../items/style.css";

const Items = (props) => {
  const { items, onShowItem, onAdd } = props;

  return (
    <div className="card-wrap">
      {items.map((el) => (
        <Item onShowItem={onShowItem} key={el.id} item={el} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default Items;
