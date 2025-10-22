import React from "react";
import { Star, ArrowRight } from "lucide-react";
import   coir from "../assets/images/coir.webp";
import spin from "../assets/images/spin.webp";
import spring from "../assets/images/spring.webp";

import ortho from "../assets/images/ortho-plus.webp";

const products = [
  {
    id: 1,
    name: "Rutile Coir Mattress",
    image:coir,
    discount: "30% Off",
    rating: 4.8,
    reviews: 262,
    sizes: ["Single", "Double", "Queen", "King", "Custom"],
    price: 5047,
    mrp: 7210,
    emi: 631,
  },
  {
    id: 2,
    name: "Ortho Plus Natural Latex Mattress",
    image: ortho,
    discount: "35% Off",
    rating: 4.7,
    reviews: 248,
    sizes: ["Single", "Double", "Queen", "King", "Custom"],
    price: 5627,
    mrp: 8657,
    emi: 703,
  },
  {
    id: 3,
    name: "Spine Ortho Foam Mattress",
    image: spin,
    discount: "30% Off",
    rating: 4.6,
    reviews: 253,
    sizes: ["Single", "Double", "Queen", "King", "Custom"],
    price: 6561,
    mrp: 9373,
    emi: 820,
  },
  {
    id: 4,
    name: "Supernova Spring Mattress",
    image: spring,
    discount: "35% Off",
    rating: 4.7,
    reviews: 233,
    sizes: ["Single", "Double", "Queen", "King", "Custom"],
    price: 5582,
    mrp: 8507,
    emi: 698,
  },
];

export default function Products() {
  return (
    <section className="bg-gray-50 py-10 px-6 md:px-16">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Bestsellers</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold py-1 px-2 rounded">
                {p.discount}
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-center text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {p.reviews} reviews
                </span>
              </div>

              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {p.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3">
                {p.sizes.map((s, i) => (
                  <span
                    key={i}
                    className="border rounded-full px-3 py-1 text-xs text-gray-600"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="text-gray-800 font-bold text-lg">
                ₹{p.price.toLocaleString()}
                <span className="text-gray-500 text-sm line-through ml-2">
                  ₹{p.mrp.toLocaleString()}
                </span>
                <span className="text-red-500 text-sm ml-1">
                  ({p.discount})
                </span>
              </div>

              {/* <div className="mt-1 text-gray-500 text-sm">
                or ₹{p.emi}/Month{" "}
                <button className="bg-red-600 text-white text-xs px-2 py-1 ml-2 rounded">
                  Buy on EMI
                </button>
              </div> */}

              <div className="mt-4 flex justify-end">
                <button className="p-2 border rounded-full hover:bg-gray-100 transition">
                  <ArrowRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
