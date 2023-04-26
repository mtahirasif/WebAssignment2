import React, { useState } from "react";

function WishList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    if (newItem.trim() === "") return;
    const item = { name: newItem, priority: newPriority };
    setItems([...items, item]);
    setNewItem("");
    setNewPriority("");
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updatePriority = (index, newPriority) => {
    const newItems = [...items];
    newItems[index].priority = newPriority;
    setItems(newItems);
  };

  const moveItemToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1);
    setItems([item[0], ...newItems]);
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <label>
          Add Item:
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        </label>
        <label>
          Priority:
          <input
            type="text"
            value={newPriority}
            onChange={(event) => setNewPriority(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Priority: {item.priority}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => updatePriority(index, prompt("Enter new priority"))}>
              Update Priority
            </button>
            <button onClick={() => moveItemToTop(index)}>Move to Top</button>
          </li>
        ))}
      </ul>
      
    </div>
    
  );
}

export default WishList;
