import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PureMotionWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold">PURE MOTION</h1>
        <nav className="space-x-6">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Premium Teamwear Without Premium Pricing
        </motion.h2>
        <p className="max-w-xl mx-auto mb-6">
          Custom sportswear including match kits, tracksuits, gym wear and club merchandise.
        </p>
        <Button>Request Catalogue</Button>
      </section>

      <section id="products" className="py-16 px-6 grid md:grid-cols-3 gap-6">
        {[
          "Match Kits",
          "Tracksuits",
          "Training Wear",
          "Dancewear",
          "Gym Apparel",
          "Club Merchandise",
        ].map((item) => (
          <Card key={item} className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-sm mt-2">Fully customised designs with fast turnaround.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="about" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Built for Clubs</h2>
        <p className="max-w-xl mx-auto">
          Pure Motion provides high quality sportswear designed for grassroots teams, schools, gyms and studios.
        </p>
      </section>

      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Order</h2>
        <p className="mb-6">Tell us what you need and we will provide design options.</p>
        <Button>Contact Us</Button>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pure Motion
      </footer>
    </div>
  );
}
