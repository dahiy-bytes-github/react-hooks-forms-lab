import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // Initialize state for the form inputs
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // Handle changes in the name input field
  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle changes in the category input field
  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new item object
    const newItem = {
      id: uuid(), // Generate a unique ID using uuid
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the parent component through the callback
    onItemFormSubmit(newItem);

    // Reset the form fields
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange} // Bind input to state
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange} // Bind select to state
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
