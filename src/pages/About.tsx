import { Award, Clock, Users, Utensils } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50,000+", label: "Happy Customers" },
    { icon: <Utensils className="w-6 h-6" />, value: "500+", label: "Restaurants" },
    { icon: <Clock className="w-6 h-6" />, value: "30 mins", label: "Average Delivery Time" },
    { icon: <Award className="w-6 h-6" />, value: "4.8/5", label: "Customer Rating" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      bio: "With 15 years in the food industry, Sarah founded FoodHub with a vision to revolutionize food delivery."
    },
    {
      name: "Michael Chen",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Award-winning chef Michael ensures only the best restaurants partner with FoodHub."
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Emily oversees our delivery network, ensuring swift and reliable service across the city."
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Founded in 2020, FoodHub has grown from a small startup to the city's leading food delivery platform. 
            Our mission is to connect food lovers with the best restaurants while providing exceptional delivery service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-orange-600 mb-2 inline-flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-gray-600">We partner with only the finest restaurants to ensure every meal meets our high standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Our efficient delivery network ensures your food arrives hot and fresh, every time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our top priority, backed by our 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}