import { Search, Star } from 'lucide-react';
import { useState } from 'react';

const categories = [
  "All", "Pizza", "Burgers", "Sushi", "Indian", "Chinese", "Italian", "Desserts"
];

const menuItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 14.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop",
    description: "Classic pepperoni pizza with mozzarella cheese and tomato sauce"
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "Burgers",
    price: 12.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    description: "Grilled chicken patty with lettuce, tomato, and special sauce"
  },
  {
    id: 3,
    name: "California Roll",
    category: "Sushi",
    price: 16.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=400&fit=crop",
    description: "Fresh crab, avocado, and cucumber wrapped in rice and nori"
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Our Menu</h1>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${item.price}</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}