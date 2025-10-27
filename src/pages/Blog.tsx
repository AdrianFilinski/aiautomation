import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<string>(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.set('category', category);
    if (searchQuery) params.set('search', searchQuery);
    setSearchParams(params);
  }, [category, searchQuery, setSearchParams]);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = category === 'all' || article.category === category;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of articles on AI and Marketing Automation
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="text-sm font-medium">Filter by category:</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-64">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Articles</SelectItem>
                <SelectItem value="AI">AI</SelectItem>
                <SelectItem value="Marketing Automation">Marketing Automation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results */}
        {filteredArticles.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-muted-foreground">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
