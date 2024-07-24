 const addToItems = (items,newItem) => {
   const newItemObj = {
     id: items.length + 1,
     text: newItem,
     order: items.length + 1,
   };

   return [...items, newItemObj].sort((a, b) => a.order - b.order);
 };

const moveItem = (items, fromIndex, toIndex) => {
  const item = items[fromIndex];
  const updatedItems = [...items];
  updatedItems.splice(fromIndex, 1);
  updatedItems.splice(toIndex, 0, item);

  // Update order attribute
  const reorderedItems = updatedItems.map((item, index) => ({
    ...item,
    order: index + 1,
  }));
  // Extract id and order only
  const simplifiedItems = reorderedItems.map(({ id, order }) => ({
    id,
    order,
  }));

  // Simulate saving data to JSON by logging it to console
  console.log("Updated JSON data:", JSON.stringify(simplifiedItems, null, 2));

  return reorderedItems;
};
const deleteItem = (items,id) => {

    const updatedItems = items.filter((items) => items.id !== id);

    console.log(id,updatedItems, typeof updatedItems);

    const reorderedItems = updatedItems.map((item, index) => ({
      ...item,
      order: index + 1,
    }));

  // Extract id and order only
  const simplifiedItems = reorderedItems.map(({ id, order }) => ({
    id,
    order,
  }));

  // Simulate saving data to JSON by logging it to console
  console.log("Updated JSON data after delete:", JSON.stringify(simplifiedItems, null, 2));

  return reorderedItems;
};

export { moveItem, addToItems, deleteItem };