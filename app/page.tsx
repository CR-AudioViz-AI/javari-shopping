'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Search, Tag, Bell, TrendingDown, Star, 
  Package, Truck, CreditCard, Gift, Heart, BarChart3,
  Smartphone, Globe, Shield, Zap, ArrowRight, Check
} from 'lucide-react';

const features = [
  {
    icon: TrendingDown,
    title: 'Price Tracking',
    description: 'AI monitors prices across retailers and alerts you to drops'
  },
  {
    icon: Bell,
    title: 'Deal Alerts',
    description: 'Get notified instantly when items on your wishlist go on sale'
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Find products across multiple stores with one search'
  },
  {
    icon: BarChart3,
    title: 'Price History',
    description: 'See historical pricing to know if deals are really deals'
  },
  {
    icon: Heart,
    title: 'Wishlist Manager',
    description: 'Organize items you want and track prices automatically'
  },
  {
    icon: Tag,
    title: 'Coupon Finder',
    description: 'AI finds and applies the best coupons at checkout'
  },
  {
    icon: Package,
    title: 'Package Tracking',
    description: 'Track all your orders in one place across all retailers'
  },
  {
    icon: Gift,
    title: 'Gift Ideas',
    description: 'AI-powered gift recommendations for any occasion'
  },
  {
    icon: Shield,
    title: 'Price Protection',
    description: 'Get refund alerts if prices drop after purchase'
  }
];

const categories = [
  { name: 'Electronics', count: '50K+ products', color: 'bg-blue-500' },
  { name: 'Fashion', count: '100K+ products', color: 'bg-pink-500' },
  { name: 'Home & Garden', count: '75K+ products', color: 'bg-green-500' },
  { name: 'Sports', count: '30K+ products', color: 'bg-orange-500' },
  { name: 'Beauty', count: '40K+ products', color: 'bg-purple-500' },
  { name: 'Toys & Games', count: '25K+ products', color: 'bg-red-500' },
];

const retailers = [
  'Amazon', 'Walmart', 'Target', 'Best Buy', 'Costco', 
  'Home Depot', "Lowe's", 'Macy\'s', 'Nordstrom', 'Wayfair'
];

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    features: [
      'Track up to 10 items',
      'Daily price checks',
      'Basic deal alerts',
      'Search 5 retailers'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Shopper',
    price: '$4.99',
    period: '/month',
    features: [
      'Track up to 100 items',
      'Hourly price checks',
      'Instant deal alerts',
      'Search 50+ retailers',
      'Price history charts',
      'Coupon finder'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Power Shopper',
    price: '$9.99',
    period: '/month',
    features: [
      'Unlimited item tracking',
      'Real-time price monitoring',
      'Priority deal alerts',
      'All retailers',
      'Advanced analytics',
      'Price protection alerts',
      'Gift recommendations',
      'Family sharing (5 users)'
    ],
    cta: 'Start Free Trial',
    popular: false
  }
];

export default function JavariShoppingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">Javari Shopping</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
              <a href="#categories" className="text-slate-600 hover:text-slate-900">Categories</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
              <a href="https://javariai.com" className="text-slate-600 hover:text-slate-900">Javari AI</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="text-slate-600 hover:text-slate-900">Sign In</a>
              <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Smart Shopping
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Never Miss a Deal.<br />
              <span className="text-blue-600">Shop Smarter.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Javari Shopping tracks prices, finds deals, and alerts you when it's the perfect time to buy. 
              Save money on everything you love.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search any product to track prices..."
                  className="w-full pl-12 pr-32 py-4 text-lg rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Track Price
                </button>
              </div>
            </div>

            {/* Retailer Logos */}
            <p className="text-sm text-slate-500 mb-4">Tracking prices across:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {retailers.map((retailer) => (
                <span key={retailer} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm">
                  {retailer}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">$2.3M+</div>
              <div className="text-blue-200">Saved by Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Products Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Retailers Monitored</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-blue-200">Happy Shoppers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Shop Smart
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful AI tools that help you find the best deals and never overpay again.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Shop Every Category
            </h2>
            <p className="text-xl text-slate-600">
              Track prices and find deals across all your favorite categories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition cursor-pointer"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg mb-4`} />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{category.name}</h3>
                <p className="text-slate-500">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Start free. Upgrade when you need more power.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                whileHover={{ y: -5 }}
                className={`relative bg-white p-8 rounded-2xl border-2 ${
                  tier.popular ? 'border-blue-500 shadow-xl' : 'border-slate-200'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-600">
                      <Check className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Saving Money Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of smart shoppers who never miss a deal.
          </p>
          <a 
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ShoppingBag className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">Javari Shopping</span>
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/terms" className="hover:text-white">Terms</a>
              <a href="https://craudiovizai.com" className="hover:text-white">CR AudioViz AI</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
            © 2025 CR AudioViz AI, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
