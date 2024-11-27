import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Smart Clinic Systems transformed our practice! From patient experience to staff workflows, every aspect of our clinic has improved. Highly recommend!",
    author: "Dr. Kelley Zwicker",
    role: "Pediatrician",
    clinic: "East Ottawa Kids Clinic"
  },
  {
    quote: "The implementation process was smooth and the ongoing support is exceptional. Our staff productivity has increased significantly.",
    author: "Dr. Sarah Chen",
    role: "Medical Director",
    clinic: "Family Care Center"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Trusted by leading healthcare providers across the country
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-12">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-green-600 opacity-20" />
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.clinic}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
