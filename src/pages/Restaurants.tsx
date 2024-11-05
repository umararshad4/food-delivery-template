import { Search, Star } from 'lucide-react';
import { useState } from 'react';

const cuisineTypes = [
  "All", "Italian", "Indian", "Chinese", "Japanese", "Mexican", "Thai", "American"
];

const restaurants = [
  {
    id: 1,
    name: "La Piazza",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35",
    minOrder: 15,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    featured: true,
    description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas"
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "30-45",
    minOrder: 20,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    featured: true,
    description: "Premium sushi and Japanese dishes made with fresh ingredients"
  },
  {
    id: 3,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "20-30",
    minOrder: 12,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    featured: false,
    description: "Authentic Mexican street food and traditional dishes"
  },
  {
    id: 4,
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "30-40",
    minOrder: 18,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    featured: true,
    description: "Rich and flavorful Indian cuisine with extensive vegetarian options"
  }
];

export default function Restaurants() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCuisine = selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Restaurants Banner */}
        <div className="relative h-[300px] rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&h=400&fit=crop"
            alt="Featured Restaurants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-0 flex items-center px-8">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Top Restaurants in Your Area</h1>
              <p className="text-lg">Discover the finest dining establishments delivering to your doorstep</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {cuisineTypes.map((cuisine) => (
                <button
                  key={cuisine}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCuisine === cuisine
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCuisine(cuisine)}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                {restaurant.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                  </div>
                  <div className="flex items-center text-orange-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{restaurant.deliveryTime} mins</span>
                  <span>Min. ${restaurant.minOrder}</span>
                </div>
                <button className="w-full mt-4 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}