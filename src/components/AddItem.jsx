import React, { useState, useRef } from "react";
import { Button, Modal, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../assets/styles/AddItem.css";

const AddItemModal = ({ addToItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textInput = useRef(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    addToItems(textInput.current.input.value);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        style={{
          backgroundColor: "hsl(180, 29%, 50%)",
          color: "white",
          border: "none",
        }}
        onClick={showModal}
      >
        Add Item <PlusOutlined />
      </Button>
      <Modal
        title="Add Item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          className: "ok-button",
        }}
        cancelButtonProps={{
          className: "cancel-button",
        }}
      >
        <Input
          className="add-input-text"
          ref={textInput}
          placeholder="Write Your Thoughts....."
        />
      </Modal>
    </>
  );
};
export default AddItemModal;
