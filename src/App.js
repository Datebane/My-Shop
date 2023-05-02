import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Items from "./components/items/items";
import "./App.css";
import Categories from "./components/categories/categories";
import ShowFullItem from "./components/showfullitem/showfullitem";
import data from "./data.json";

function App() {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    setItems(data);
    setCurrentItems(data);
  }, []);

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) setOrders([...orders, item]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const choseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }

    setCurrentItems(items.filter((el) => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories choseCategory={choseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />

      {showFullItem && (
        <ShowFullItem
          onAdd={addToOrder}
          onShowItem={onShowItem}
          item={fullItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
