import { useState } from "react";

const AddItemModal = ({ onClose, onAdd }) => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [validity, setValidity] = useState("");

  const handleAdd = () => {
    if (itemName.trim() && category.trim() && validity) {
      const newItem = { name: itemName, category, validity };
      onAdd(newItem);
      setItemName("");
      setCategory("");
      setValidity("");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add Item</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded mb-2"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 border rounded mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 border rounded mb-2"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
