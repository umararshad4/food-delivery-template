import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-600">FoodHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-600">Menu</Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-orange-600">Restaurants</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-600" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile">
              <User className="w-6 h-6 text-gray-700 hover:text-orange-600" />
            </Link>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</Link>
            <Link to="/menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Menu</Link>
            <Link to="/restaurants" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Restaurants</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</Link>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link to="/profile">
                <User className="w-6 h-6 text-gray-700" />
              </Link>
            </div>
            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}