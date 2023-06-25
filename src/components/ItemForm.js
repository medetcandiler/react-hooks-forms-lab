import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({setFiltered}) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: '',
    category: 'Produce',
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setNewItem(prev => ({ ...prev, [name]: value }));
  }

  const onItemFormSubmit = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.category) {
      setFiltered(prev => [...prev, newItem])
    } else {
      alert('provide valid value and category')
    }
    setNewItem({
      id: uuid(),
      name: '',
      category: '',
    })
  }

  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" onChange={handleChange} name="name" value={newItem.name} />
      </label>

      <label>
        Category:
        <select onChange={handleChange} value={newItem.category} name="category">
          <option defaultValue="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
