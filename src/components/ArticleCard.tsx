import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Article } from '@/data/articles';
import { useLanguage } from '@/contexts/LanguageContext';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { language } = useLanguage();

  return (
    <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={article.image}
          alt={article.title[language]}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <CardContent className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant={article.category === 'AI' ? 'default' : 'secondary'}>
            {article.category}
          </Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(article.date).toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime[language]}
            </span>
          </div>
        </div>

        <h3 className="mb-2 text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {article.title[language]}
        </h3>

        <p className="text-muted-foreground line-clamp-3">
          {article.excerpt[language]}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/article/${article.id}`} className="w-full">
          <Button variant="ghost" className="w-full group/button">
            {language === 'pl' ? 'Czytaj więcej' : 'Read More'}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

