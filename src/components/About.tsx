import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Customer-Centric",
    description: "Customer needs at the heart of every decision"
  }, {
    icon: Target,
    title: "Problem Solver",
    description: "Focus on solving the right problems, not just any problems"
  }, {
    icon: Zap,
    title: "Results-Driven",
    description: "Transform insights into measurable outcomes"
  }, {
    icon: Users,
    title: "Team Enabler",
    description: "Swiss army knife helping product teams succeed"
  }];
  return <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 8 years of experience spanning startups to Fortune 500 companies, 
                I've learned that the best products come from deeply understanding customer needs 
                and translating those insights into actionable strategies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love all things product and act as a Swiss army knife for teams, 
                bringing together business analysis, user research, and process optimization 
                to help bring good products to life.
              </p>
              <div className="flex flex-wrap gap-2">
                
                
                <Badge variant="secondary" className="px-3 py-1">Startups → Fortune 500</Badge>
                <Badge variant="secondary" className="px-3 py-1">Multiple Industries</Badge>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="animate-fade-in opacity-0 hover:shadow-lg transition-all duration-300" style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;