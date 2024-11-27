import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-800 to-green-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Practice with Cloud-Based Innovation
            </h1>
            <p className="text-lg opacity-90">
              We help medical practices leverage HIPAA-compliant cloud technology
              and region-specific privacy solutions to streamline operations,
              enhance patient care, and reduce administrative burden.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Streamlined Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Enhanced Patient Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Reduced Administrative Burden</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="bg-white text-green-800 hover:bg-gray-100" asChild>
                <a href="https://calendly.com/seankerklaan/30min" target="_blank" rel="noopener noreferrer">
                  Book Your Free Practice Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Quick Start Package - $1,899
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/healthcare-professional.svg"
              alt="Healthcare Professional"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
