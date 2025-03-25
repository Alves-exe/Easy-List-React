const PurchasedItemsModal = ({ items, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Purchased Items</h2>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="p-2 bg-gray-200 rounded mt-2">
                <strong>{item.name}</strong> - {item.category} (Validade:{" "}
                {item.validity})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No items purchased</p>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasedItemsModal;
