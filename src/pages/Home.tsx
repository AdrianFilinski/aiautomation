import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const aiArticles = articles.filter(a => a.category === 'AI').slice(0, 3);
  const automationArticles = articles.filter(a => a.category === 'Marketing Automation').slice(0, 3);

  const content = {
    pl: {
      hero: {
        badge: 'Twoja baza wiedzy',
        title: 'Witaj w świecie',
        subtitle: 'Poznaj nowoczesne pomysły, praktyczne wskazówki i inspiracje z zakresu sztucznej inteligencji oraz automatyzacji marketingu. Pozostań na bieżąco dzięki ciekawym artykułom i skutecznym strategiom, które możesz od razu wykorzystać.',
        cta: 'Przeglądaj artykuły',
        about: 'O mnie'
      },
      ai: {
        title: 'Najnowsze w AI',
        subtitle: 'Odkryj najnowsze trendy i spostrzeżenia w sztucznej inteligencji',
        viewAll: 'Zobacz wszystkie'
      },
      automation: {
        title: 'Najnowsze w Marketing Automation',
        subtitle: 'Opanuj sztukę automatyzacji marketingu dzięki eksperckim poradnikom',
        viewAll: 'Zobacz wszystkie'
      }
    },
    en: {
      hero: {
        badge: 'Your Knowledge Base',
        title: 'Welcome to the world of',
        subtitle: 'Discover modern ideas, practical tips, and inspiration in artificial intelligence and marketing automation. Stay up to date with interesting articles and effective strategies you can use right away.',
        cta: 'Explore Articles',
        about: 'About Me'
      },
      ai: {
        title: 'Latest in AI',
        subtitle: 'Discover the latest trends and insights in artificial intelligence',
        viewAll: 'View All'
      },
      automation: {
        title: 'Latest in Marketing Automation',
        subtitle: 'Master the art of marketing automation with expert guides and strategies',
        viewAll: 'View All'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI & Marketing Automation
              </span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/blog">
                <Button size="lg" className="w-full sm:w-auto">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {t.hero.about}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Articles Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">{t.ai.title}</h2>
              <p className="text-muted-foreground">
                {t.ai.subtitle}
              </p>
            </div>
            <Link to="/blog?category=AI" className="hidden sm:block">
              <Button variant="ghost">
                {t.ai.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog?category=AI">
              <Button variant="ghost">
                {t.ai.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Marketing Automation Articles Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">{t.automation.title}</h2>
              <p className="text-muted-foreground">
                {t.automation.subtitle}
              </p>
            </div>
            <Link to="/blog?category=Marketing Automation" className="hidden sm:block">
              <Button variant="ghost">
                {t.automation.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {automationArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog?category=Marketing Automation">
              <Button variant="ghost">
                {t.automation.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
