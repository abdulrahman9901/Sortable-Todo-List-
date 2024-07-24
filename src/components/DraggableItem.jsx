import { useDrag, useDrop } from "react-dnd";
import {useRef} from 'react'
import "../assets/styles/DraggableItem.css";
import { Card, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const ItemType = "ITEM";

const DraggableItem = ({ id, text, index, moveItem , deleteItem }) => {

  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });


  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem, monitor) => {
         
    },
    drop: (draggedItem) => {
      // Move the item on drop
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index; // Update the index in the dragged item
      }
    },
  });

  drag(drop(ref));

  return (
    <Card
      bordered={false}
      style={{
        width: 300,
        opacity: isDragging ? 0.5 : 1,
      }}
      ref={ref}
      className="list-item"
    >
      <p>
        {text}
        <Button
          className="item-delete-btn"
          onClick={() => deleteItem(id)}
        >
          <CloseOutlined />
        </Button>
      </p>
    </Card>
  );
};

export default DraggableItem;