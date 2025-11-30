import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '@/data/articles';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { language } = useLanguage();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({
      title: language === 'pl' ? 'Link skopiowany!' : 'Link copied!',
      description: language === 'pl'
        ? 'Link do artykułu został skopiowany do schowka.'
        : 'Article link has been copied to clipboard.',
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="mb-8 inline-block">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'pl' ? 'Wróć do bloga' : 'Back to Blog'}
            </Button>
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant={article.category === 'AI' ? 'default' : 'secondary'}>
                  {article.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime[language]}
                  </span>
                </div>
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                {article.title[language]}
              </h1>

              <p className="mb-6 text-xl text-muted-foreground">
                {article.excerpt[language]}
              </p>

              <div className="flex items-center justify-between border-t border-b py-4">
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'pl' ? 'Autor' : 'Written by'}</p>
                  <p className="font-medium">{article.author}</p>
                </div>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  {language === 'pl' ? 'Udostępnij' : 'Share'}
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src={article.image}
                alt={article.title[language]}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div
                dangerouslySetInnerHTML={{
                  __html: article.content[language].replace(/\n/g, '<br />'),
                }}
              />
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-16 border-t pt-8">
            <h2 className="mb-6 text-2xl font-bold">
              {language === 'pl' ? `Więcej w kategorii ${article.category}` : `More in ${article.category}`}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {articles
                .filter((a) => a.category === article.category && a.id !== article.id)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/article/${relatedArticle.id}`}
                    className="group rounded-lg border p-4 transition-colors hover:bg-muted"
                  >
                    <h3 className="mb-2 font-bold group-hover:text-primary">
                      {relatedArticle.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedArticle.excerpt[language]}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

