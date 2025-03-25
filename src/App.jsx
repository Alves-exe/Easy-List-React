import { useState, useEffect } from "react";
import { CirclePlus, CircleCheck } from "lucide-react";
import AddItemModal from "./components/AddItemModal";
import ItemDetailsModal from "./components/ItemDetailsModal";
import PurchasedItemsModal from "./components/PurchasedItemsModal";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPurchasedModalOpen, setIsPurchasedModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // RECUPERA O LOCAL STORAGE
  useEffect(() => {
    const storedItems = localStorage.getItem("shoppingItems");
    const storedPurchased = localStorage.getItem("purchasedItems");

    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }

    if (storedPurchased) {
      setPurchasedItems(JSON.parse(storedPurchased));
    }
  }, []);

  // ATT LCLSTORAGE SEMPRE Q OCORRER ALGO NA LISTA

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("shoppingItems", JSON.stringify(items));
    }
  }, [items]);

  // ATT LOCAL STORAGE PARA Q SEMPRE Q MUDAR ATUALIZAR
  useEffect(() => {
    if (purchasedItems.length > 0) {
      localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
    }
  }, [purchasedItems]);

  // ADICIONA NO LOCAL STORAGE NAVEGADOR
  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("shoppingItems", JSON.stringify(updatedItems));
  };

  // MARCA COMO COMPRADO E MUDA PARA A LISTA DE COMPRADOS
  const markAsPurchased = (index) => {
    const updatedPurchased = [...purchasedItems, items[index]];
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setPurchasedItems(updatedPurchased);
    localStorage.setItem("shoppingItems", JSON.stringify(updatedItems));
    localStorage.setItem("purchasedItems", JSON.stringify(updatedPurchased));
  };

  // REMOVER ITENS DA LISTA
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem("shoppingItems", JSON.stringify(updatedItems));
  };

  // TAILWIND

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-80 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img src="/Logo.png" alt="Logo" className="w-28 h-28" />
        <h1 className="text-green-500 text-2xl font-bold mt-4">
          Shopping List
        </h1>

        <ul className="mt-4 w-full text-white text-left">
          {items.length > 0 ? (
            items.map((item, index) => (
              <ShoppingItem
                key={index}
                item={item}
                onPurchase={() => markAsPurchased(index)}
                onDelete={() => removeItem(index)}
                onView={() => setSelectedItem(item)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">
              Nenhum item na lista.
            </p>
          )}
        </ul>

        <div className="flex items-center justify-between w-full mt-6 space-x-6">
          <CirclePlus
            className="text-green-500 size-12 cursor-pointer hover:text-green-400"
            onClick={() => setIsAddModalOpen(true)}
          />
          <CircleCheck
            className="text-green-500 size-12 cursor-pointer hover:text-green-400"
            onClick={() => setIsPurchasedModalOpen(true)}
          />
        </div>
      </div>

      {isAddModalOpen && (
        <AddItemModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={addItem}
        />
      )}
      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
      {isPurchasedModalOpen && (
        <PurchasedItemsModal
          items={purchasedItems}
          onClose={() => setIsPurchasedModalOpen(false)}
        />
      )}
    </div>
  );
}
//ABRIR E FECHAR MODALS

export default App;
