import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemList, setItemList] = useState(items);

  // Handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handle adding new items from the ItemForm
  function handleItemFormSubmit(newItem) {
    setItemList((prevItems) => [...prevItems, newItem]); // Add new item to the list
  }

  // Filter items based on selected category and search term
  const itemsToDisplay = itemList.filter((item) => {
    const matchesCategory = item.category === selectedCategory || selectedCategory === "All";
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
