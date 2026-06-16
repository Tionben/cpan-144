import React, { useState } from "react";

const ItemList = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Avocado"]);
    const [newItem, setNewItem] = useState("");
    const [showOnlyA, setShowOnlyA] = useState(false);

    const addItem = () => {
        if (newItem.trim() === "") {
            return;
        }

        setItems([...items, newItem]);
        setNewItem("");
    };

    const deleteItem = (indexToDelete: number) => {
        setItems(items.filter((_, index) => index !== indexToDelete));
    };

    const displayedItems = showOnlyA
        ? items.filter((item) => item.toLowerCase().startsWith("a"))
        : items;

    return (
        <section>
            <h2>Item List</h2>

            <ul>
                {displayedItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(items.indexOf(item))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Enter new item"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
            />

            <button onClick={addItem}>Add Item</button>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showOnlyA}
                        onChange={(event) => setShowOnlyA(event.target.checked)}
                    />
                    Show Only Items Starting with 'A'
                </label>
            </div>
        </section>
    );
};

export default ItemList;