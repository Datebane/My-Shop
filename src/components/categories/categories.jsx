import React, { useState } from "react";
import style from "./../categories/style.css";

const Categories = (props) => {
  const [categories] = useState([
    {
      key: "all",
      name: "Все",
    },
    {
      key: "chair",
      name: "Стільці",
    },
    {
      key: "tables",
      name: "Столи",
    },
    {
      key: "sofa",
      name: "Дивани",
    },
    {
      key: "light",
      name: "Лампи",
    },
  ]);

  const handleCategoryClick = (key) => {
    props.choseCategory(key);
  };

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => handleCategoryClick(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
