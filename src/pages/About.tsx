import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About This Platform</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your trusted resource for AI and marketing automation knowledge
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We're dedicated to demystifying the complex world of artificial intelligence and marketing automation. 
                Through in-depth articles, practical guides, and expert insights, we empower professionals to harness 
                these powerful technologies to transform their businesses and careers.
              </p>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">What We Stand For</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Staying at the forefront of AI and automation trends
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold">Practicality</h3>
                <p className="text-sm text-muted-foreground">
                  Delivering actionable insights you can implement today
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a network of forward-thinking professionals
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and professional development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Topics */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">What We Cover</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">Artificial Intelligence</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    Machine learning fundamentals and applications
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    Natural language processing and chatbots
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    Computer vision and image recognition
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    AI ethics and responsible implementation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    Generative AI and content creation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-accent">Marketing Automation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-accent">•</span>
                    Email marketing automation workflows
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-accent">•</span>
                    CRM integration and data management
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-accent">•</span>
                    Lead scoring and nurturing strategies
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-accent">•</span>
                    Marketing analytics and attribution
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-accent">•</span>
                    Personalization and customer segmentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Join Our Community</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Stay updated with the latest insights and connect with like-minded professionals
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Follow on Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
