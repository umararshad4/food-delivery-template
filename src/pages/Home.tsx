import { ArrowRight, Clock, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Best Quality",
      description: "We partner with only the best restaurants"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Service",
      description: "Order anytime, we're always here for you"
    }
  ];

  const popularDishes = [
    {
      name: "Classic Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
      price: 12.99,
      rating: 4.8
    },
    {
      name: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=400&fit=crop",
      price: 15.99,
      rating: 4.7
    },
    {
      name: "Chicken Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop",
      price: 16.99,
      rating: 4.9
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=600&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious Food<br />Delivered To Your Door
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Choose from thousands of restaurants and get your favorite meals delivered right to your doorstep.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
          >
            Order Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-orange-600 mb-4 inline-block">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{dish.name}</h3>
                    <div className="flex items-center text-orange-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{dish.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">${dish.price}</p>
                  <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}