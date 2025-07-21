import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Rocket, TrendingUp, Users, Calendar } from "lucide-react";
const Experience = () => {
  const experiences = [{
    type: "Fortune 500",
    icon: Building2,
    companies: ["Global Retailer", "Financial Services", "Healthcare Corp"],
    description: "Large-scale digital transformations, enterprise-wide CX strategies, and complex stakeholder management",
    highlights: ["Multi-million dollar impact", "Cross-functional leadership", "Global rollouts"],
    color: "bg-blue-50 border-blue-200"
  }, {
    type: "Growth Stage",
    icon: TrendingUp,
    companies: ["FinTech Scale-up", "E-commerce Platform", "SaaS Company"],
    description: "Rapid scaling support, product-market fit optimization, and growth-focused process design",
    highlights: ["50-500 employee scaling", "Product optimization", "Market expansion"],
    color: "bg-green-50 border-green-200"
  }, {
    type: "Startups",
    icon: Rocket,
    companies: ["Early-stage SaaS", "Healthcare Startup", "B2B Platform"],
    description: "Foundation building, MVP development support, and lean methodology implementation",
    highlights: ["0-1 product development", "Lean processes", "Resource optimization"],
    color: "bg-purple-50 border-purple-200"
  }];
  const industries = ["Financial Services", "Healthcare", "E-commerce", "SaaS", "Manufacturing", "Retail", "Technology", "B2B Services"];
  const timeline = [{
    year: "2016",
    milestone: "Started as an Economic Analyst in Private Equity, building strong analytical foundations"
  }, {
    year: "2018",
    milestone: "Moved into Fintech, gaining experience in fast‑paced product environments"
  }, {
    year: "2019",
    milestone: "Pivoted to Tech and Business Analysis, translating needs into actionable solutions"
  }, {
    year: "2020",
    milestone: "Drove Product Development and Discovery initiatives"
  }, {
    year: "2021",
    milestone: "Expanded into CX Strategy and User Research"
  }, {
    year: "2024",
    milestone: "Added Product Operations knowledge while helping set up and shape that stream"
  }];
  return <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Experience</span>
            </h2>
            
          </div>

          {/* Company Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className={`${exp.color} transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{exp.type}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.companies.map((company, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline & Industries */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Career Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Career Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                    </div>
                    <div className="pt-2">
                      <p className="font-medium">{item.milestone}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Industries Served
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Experience across diverse sectors, bringing cross-industry insights 
                  to every engagement.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry, index) => <div key={index} className="bg-gradient-to-r from-primary/5 to-transparent p-3 rounded-lg border border-primary/10">
                      <span className="text-sm font-medium">{industry}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Add Value to Your Team?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a startup finding your product-market fit or an enterprise 
              optimizing at scale, I bring the right experience for your stage and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Quick to onboard
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Cross-functional collaboration
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Immediate impact
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;