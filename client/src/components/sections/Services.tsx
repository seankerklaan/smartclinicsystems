import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Monitor, Users, Zap, GraduationCap, BookOpen, UserCheck, Lock, Video, Book } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SideFeature {
  title: string;
  features: string[];
  icon: LucideIcon;
}

interface BaseService {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface StandardService extends BaseService {
  customLayout?: false;
  features: string[];
}

interface TeamExcellenceService extends BaseService {
  customLayout: true;
  subtitle: string;
  mainFeatures: Feature[];
  sideFeatures: SideFeature[];
}

type Service = StandardService | TeamExcellenceService;

const services: Service[] = [
  {
    title: "Practice Setup & Optimization",
    description: "Complete guidance for new clinic setup or existing practice optimization, ensuring efficient workflows from day one.",
    icon: Monitor,
    features: [
      "EMR implementation and workflow design",
      "Patient data migration and cleanup",
      "Custom templates and automation setup",
      "Billing system integration"
    ]
  },
  {
    title: "Patient Experience Enhancement",
    description: "Create a seamless patient journey from first contact to follow-up care.",
    icon: Users,
    features: [
      "Online booking integration",
      "Automated appointment reminders",
      "Patient portal setup",
      "Satisfaction survey systems"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Streamline operations and reduce manual tasks with smart automation.",
    icon: Zap,
    features: [
      "Document management systems",
      "Task automation workflows",
      "Digital forms and signatures",
      "Integrated faxing solutions"
    ]
  },
  {
    title: "Team Excellence",
    subtitle: "Empower Your Team with Knowledge & Tools",
    description: "Transform your staff into confident, skilled professionals with our comprehensive training and documentation system.",
    icon: GraduationCap,
    customLayout: true,
    mainFeatures: [
      {
        title: "Smart Onboarding",
        description: "Structured training programs with video tutorials, interactive guides, and hands-on practice sessions.",
        icon: UserCheck
      },
      {
        title: "Knowledge Library",
        description: "Searchable documentation hub with clinic policies, procedures, and best practices.",
        icon: BookOpen
      },
      {
        title: "Role-Based Training",
        description: "Customized learning paths for different roles, from front desk to clinical staff.",
        icon: Users
      }
    ],
    sideFeatures: [
      {
        title: "System Access & Security",
        features: [
          "Secure credential management",
          "Role-based access control",
          "Multi-factor authentication"
        ],
        icon: Lock
      },
      {
        title: "Training Resources",
        features: [
          "Screen recording library",
          "Interactive workflow guides",
          "Quick reference cards"
        ],
        icon: Video
      },
      {
        title: "Continuous Learning",
        features: [
          "Regular skill updates",
          "Best practice sharing",
          "Performance tracking"
        ],
        icon: Book
      }
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Practice Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your practice with our proven PDSA approach,
            combining smart technology with human-centered solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`transition-all hover:shadow-lg ${service.customLayout ? 'lg:col-span-2' : ''}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                {service.customLayout && (
                  <div className="text-sm font-medium text-green-700 mb-2">{service.subtitle}</div>
                )}
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {service.customLayout ? (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left column with main features */}
                    <div className="space-y-6">
                      {service.mainFeatures.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-green-700" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Right column with feature boxes */}
                    <div className="space-y-4">
                      {service.sideFeatures.map((feature, fIndex) => (
                        <div key={fIndex} className="bg-white rounded-lg p-6 shadow-sm">
                          <div className="flex items-center space-x-3 mb-4">
                            <feature.icon className="w-5 h-5 text-green-700" />
                            <h4 className="font-medium">{feature.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {feature.features.map((subFeature, subIndex) => (
                              <li key={subIndex} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                                <span className="text-sm text-gray-600">{subFeature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
