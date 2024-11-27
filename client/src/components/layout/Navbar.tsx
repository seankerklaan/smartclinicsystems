import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/smart-clinic-systems-logo.png" alt="Smart Clinic Systems Logo" className="h-10 w-10" />
            <span className="font-semibold text-xl">Smart Clinic Systems</span>
          </div>
        </Link>

        <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#services" className="hover:text-primary">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">Contact</a>
              </li>
            </ul>
          </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:613-800-6876" className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>613-800-6876</span>
          </a>
          <Button asChild>
            <a href="https://calendly.com/seankerklaan/30min" target="_blank" rel="noopener noreferrer">
              Book Free Analysis
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
