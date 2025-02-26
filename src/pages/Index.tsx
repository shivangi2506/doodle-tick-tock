
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Heart, Star, Rocket } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const watches = [
    {
      id: 1,
      name: "Space Explorer",
      image: "/lovable-uploads/04897dd7-bd4f-4465-b504-0895a1577432.png",
      price: "₹1,499",
      category: "Space"
    },
    {
      id: 2,
      name: "Rainbow Hearts",
      image: "/lovable-uploads/76ef1e5e-0bdc-4cc4-847f-c13d52738e36.png",
      price: "₹1,299",
      category: "Love"
    },
    {
      id: 3,
      name: "Doodle Dreams",
      image: "/lovable-uploads/2c1f9514-2cd5-42c5-80cd-5de6bca35766.png",
      price: "₹1,399",
      category: "Art"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-pattern relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute top-0 right-0 w-32 h-32 bg-doodle-yellow opacity-20 rounded-bl-full" />
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl mb-6 text-gray-800">
                Time to{" "}
                <span className="text-primary">Imagine!</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Watches that spark creativity and make learning time fun!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="doodle-button"
              >
                Explore Collection
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/lovable-uploads/2c1f9514-2cd5-42c5-80cd-5de6bca35766.png"
                alt="DoodleTick Watch"
                className="w-full max-w-md mx-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16">Why Kids Love Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Learn Time Fun",
                description: "Makes telling time an adventure"
              },
              {
                icon: Heart,
                title: "Safe & Comfy",
                description: "Kid-friendly materials"
              },
              {
                icon: Star,
                title: "Creative Design",
                description: "Inspired by kids' doodles"
              },
              {
                icon: Rocket,
                title: "Adventure Ready",
                description: "Durable for daily fun"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg card-hover"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16">Featured Watches</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {watches.map((watch, i) => (
              <motion.div
                key={watch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white shadow-lg card-hover"
              >
                <div className="relative pt-[100%]">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-doodle-pink/10 text-primary text-sm mb-2">
                    {watch.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{watch.name}</h3>
                  <p className="text-2xl text-primary font-bold">{watch.price}</p>
                  <button className="mt-4 w-full doodle-button">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="/lovable-uploads/ef5e42e5-8a02-4fc3-9e92-2e0a3778d416.png"
              alt="DoodleTick Logo"
              className="w-48 mx-auto mb-8"
            />
            <h2 className="text-4xl mb-8">Our Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              Every kid loves to doodle! We turned that love into a fun, wearable
              experience. DoodleTick is more than just a watch—it's a creative
              companion that lets kids express themselves while learning time in a
              playful way!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="doodle-button"
            >
              Learn More About Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
