import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./../orders/order";
import Burger from "./../burger/index.jsx";
import "./../header/style.css";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

      <p className="summa">
        Загальна сума:{new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>В корзині нічого немає</h2>
    </div>
  );
};

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <header>
      <div>
        <div className="box">
          <span className="logo">FRNTR</span>
          <div className="block">
            <FaShoppingBasket
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop ${cartOpen && "active"}`}
            />
            <ul className="list">
              <li>Вітальня</li>
              <li>Спальня</li>
              <li>Кухня</li>
            </ul>
          </div>
          <div className="burger-menu" onClick={handleClick}>
            ☰{showBurgerMenu && <Burger />}
          </div>
        </div>

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation">
        <p className="presentation1">Створи свій комфорт</p>
        <p className="presentation2">Стильні меблі на будь-який смак</p>
      </div>
    </header>
  );
};

export default Header;
