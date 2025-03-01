import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200  py-10 text-red-900">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-xl font-bold ">☕ Coffee Hub</h2>
          <p className="mt-2 text-sm">
            The best coffee spot in town! Freshly brewed coffee, cozy ambiance, and friendly service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="link link-hover">Home</Link></li>
            <li><Link to="/about" className="link link-hover">About Us</Link></li>
            <li><Link to="/menu" className="link link-hover">Menu</Link></li>
            <li><Link to="/contact" className="link link-hover">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="btn btn-circle btn-ghost"><Facebook size={20} /></a>
            <a href="#" className="btn btn-circle btn-ghost"><Twitter size={20} /></a>
            <a href="#" className="btn btn-circle btn-ghost"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t pt-4 text-sm">
        © {new Date().getFullYear()} Coffee Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
