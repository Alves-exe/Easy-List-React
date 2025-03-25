import { Eye, Trash2, CheckSquare } from "lucide-react";

const ShoppingItem = ({ item, onPurchase, onDelete, onView }) => {
  return (
    <li className="p-2 bg-gray-800 rounded mt-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <CheckSquare
          className="text-green-500 cursor-pointer"
          onClick={onPurchase}
        />
        <span>{item.name}</span>
      </div>
      <div className="flex space-x-2">
        <Eye
          className="text-blue-400 cursor-pointer hover:text-blue-500"
          onClick={onView}
        />
        <Trash2
          className="text-red-500 cursor-pointer hover:text-red-600"
          onClick={onDelete}
        />
      </div>
    </li>
  );
};

export default ShoppingItem;
