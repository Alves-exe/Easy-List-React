const ItemDetailsModal = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Item Details</h2>
        <p>
          <strong>Nome:</strong> {item.name}
        </p>
        <p>
          <strong>Categoria:</strong> {item.category}
        </p>
        <p>
          <strong>Validade:</strong> {item.validity}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
