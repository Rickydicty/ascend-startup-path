
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        { name: "3 Idea Analyses per Month", included: true },
        { name: "Basic AI Feedback", included: true },
        { name: "Limited Chat Support", included: true },
        { name: "Basic Roadmap Generation", included: true },
        { name: "Voice Call with Advisors", included: false },
        { name: "Premium Investment Insights", included: false },
        { name: "Advanced AI Analysis", included: false },
        { name: "1-on-1 Mentorship", included: false },
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$29",
      features: [
        { name: "Unlimited Idea Analyses", included: true },
        { name: "Advanced AI Feedback", included: true },
        { name: "Priority Chat Support", included: true },
        { name: "Detailed Roadmap Generation", included: true },
        { name: "Monthly Voice Call with Advisors", included: true },
        { name: "Premium Investment Insights", included: true },
        { name: "Advanced AI Analysis", included: true },
        { name: "1-on-1 Mentorship", included: false },
      ],
      buttonText: "Upgrade Now",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: [
        { name: "Unlimited Idea Analyses", included: true },
        { name: "Advanced AI Feedback", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Detailed Roadmap Generation", included: true },
        { name: "Weekly Voice Call with Advisors", included: true },
        { name: "Premium Investment Insights", included: true },
        { name: "Advanced AI Analysis", included: true },
        { name: "Dedicated 1-on-1 Mentorship", included: true },
      ],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your entrepreneurial journey, from idea validation to enterprise scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass p-6 rounded-xl transition-all ${
                plan.highlight 
                  ? 'border-startup-purple border-2 ring-2 ring-startup-purple/20 shadow-lg'
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="bg-startup-purple text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.highlight 
                    ? 'bg-startup-purple hover:bg-startup-purple/90' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
