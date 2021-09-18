import React from "react";
const Wish = ({ item, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(item.id);
  };
  return (
    <>
      <input type="checkbox" checked={item.received} />
      <li>{item.itemName}</li>
      <button onClick={handleDelete}>delete me</button>
      <br />
    </>
  );
};
export default Wish;
