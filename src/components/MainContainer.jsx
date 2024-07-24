import React, { useState, useEffect } from "react";
import {useDrop } from "react-dnd";
import withScrolling from "react-dnd-scrolling";
import "../assets/styles/MainContainer.css";
import bgImg from "../assets/images/bg-header-desktop.svg";
import DraggableItem from "./DraggableItem";
import AddItemModal from "./AddItem";
import {useFetch} from "../hooks/useFetch";
import { moveItem, addToItems, deleteItem } from "../ustilities/itemsUtil";

const ItemType = "ITEM";

const MainContainer = () => {

  const { data, loading, error } = useFetch("/data.json");

  const [items, setItems] = useState([]);

  const [, drop] = useDrop({ accept: ItemType });

  const ScrollingComponent = withScrolling("div");


  const handleAddToItems = (newItem) => {
    const updatedItems = addToItems(items, newItem);
    setItems(updatedItems);
  };

  const handleMoveItem = (fromIndex, toIndex) => {
    const updatedItems = moveItem(items, fromIndex, toIndex);
      setItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = deleteItem(items, id);
    setItems(updatedItems);
  };

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);
  

  if (loading) {
    return <div className="main-container">Loading...</div>; 
  }

  if (error) {
    return <div className="main-container">Error: {error}</div>; 
  }

  if (!data) {
    return <div className="main-container">No data available</div>;
  }

  return (
    <>
      <img src={bgImg} className="bg-img" alt="Background Header" />
      <div className="main-container">
        <AddItemModal addToItems={handleAddToItems} />
        <ScrollingComponent ref={drop} className="list-container">
          {items.map((item, index) => (
            <DraggableItem
              key={item.order}
              id={item.id}
              text={item.text}
              index={index}
              moveItem={handleMoveItem}
              deleteItem={handleDeleteItem}
            />
          ))}
        </ScrollingComponent>
      </div>
    </>
  );
};

export default MainContainer;
