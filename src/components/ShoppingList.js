import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filtered, setFiltered] = useState(items);

  const categoryHandler = (e) => {
    const newCategory = e.target.value;

    if (newCategory === "All") return setFiltered(items);

    return setFiltered(filtered.filter(item => item.category === newCategory));
  };

  const onSearchChange = (e) => {
    setFiltered(filtered.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  };

 

  return (
    <div className="ShoppingList">
      <ItemForm setFiltered={setFiltered} />
      <Filter onSearchChange={onSearchChange} onCategoryChange={categoryHandler} />
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
