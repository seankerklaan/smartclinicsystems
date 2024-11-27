import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Recognition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Skills and Innovations Recognized at the OntarioMD Conference
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Feedback from our recent OntarioMD presentation underscores the impact of our solutions in transforming clinic operations:
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="relative">
            <CardContent className="pt-12">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-green-600 opacity-20" />
              <p className="text-gray-700 italic text-lg mb-4">
                "Payment with no touch from admin"
              </p>
            </CardContent>
          </Card>

          <div className="text-gray-600 text-center px-4">
            Session attendees highlighted the value of automation in reducing administrative burdens and improving operational efficiency.
          </div>

          <Card className="relative">
            <CardContent className="pt-12">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-green-600 opacity-20" />
              <p className="text-gray-700 italic text-lg mb-4">
                "Ability to connect and create a clinic with multiple physicians in a short period of time to offer after-hours care for pediatric patients."
              </p>
            </CardContent>
          </Card>

          <div className="text-gray-600 text-center px-4">
            Our systems were praised for enabling rapid implementation of scalable clinic models, directly benefiting patients and providers.
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              These insights reflect our commitment to empowering clinic owners with practical, high-impact solutions. Ready to transform your clinic? Let us help you streamline operations and improve patient care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
