# How to Add New Articles

This guide explains how to add new blog articles to your AI & Marketing Automation website.

## Quick Overview

Articles are stored as JavaScript objects in the `src/data/articles.ts` file. To add a new article, you simply add a new object to the `articles` array.

## Step-by-Step Instructions

### 1. Open the Articles File

Navigate to and open: `src/data/articles.ts`

### 2. Add Your Article

Add a new article object to the `articles` array. Here's the template:

```typescript
{
  id: 'your-article-slug',
  title: 'Your Article Title',
  excerpt: 'A brief summary of your article (2-3 sentences)',
  category: 'AI', // or 'Marketing Automation'
  date: '2025-10-27', // YYYY-MM-DD format
  author: 'Your Name',
  readTime: '5 min read',
  image: '/placeholder.svg', // You can replace with your own image
  content: `# Your Article Title

Your article content goes here in markdown format.

## Section Heading

You can use markdown formatting:
- **Bold text**
- *Italic text*
- Lists
- Links
- And more!

### Subsection

Add paragraphs, code blocks, and any other markdown elements.`
}
```

### 3. Article Object Properties

| Property | Description | Example |
|----------|-------------|---------|
| `id` | Unique identifier (used in URL) | `'ai-transforming-business'` |
| `title` | Article title | `'How AI is Transforming Business'` |
| `excerpt` | Short summary for article cards | `'Explore the revolutionary impact of AI...'` |
| `category` | Must be exactly `'AI'` or `'Marketing Automation'` | `'AI'` |
| `date` | Publication date in YYYY-MM-DD format | `'2025-10-27'` |
| `author` | Author name | `'John Smith'` |
| `readTime` | Estimated reading time | `'5 min read'` |
| `image` | Image path (currently placeholder) | `'/placeholder.svg'` |
| `content` | Full article content in markdown | See markdown example below |

### 4. Writing Content in Markdown

The `content` field supports markdown formatting. Use backticks to wrap your markdown:

```typescript
content: `# Main Heading

Your introduction paragraph goes here.

## Section 1

Some content with **bold** and *italic* text.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Section 2

More content here.

1. Numbered list
2. Another item
3. Final item

You can add as much content as you need!`
```

### 5. Example: Adding a New Article

Here's a complete example of adding a new article:

```typescript
export const articles: Article[] = [
  // ... existing articles ...
  
  // Your new article
  {
    id: 'chatgpt-marketing-strategies',
    title: 'ChatGPT Marketing Strategies for 2025',
    excerpt: 'Discover how to leverage ChatGPT and generative AI to create compelling marketing campaigns that drive engagement and conversions.',
    category: 'AI',
    date: '2025-10-27',
    author: 'Sarah Johnson',
    readTime: '6 min read',
    image: '/placeholder.svg',
    content: `# ChatGPT Marketing Strategies for 2025

Generative AI tools like ChatGPT are revolutionizing how marketers create content, engage with customers, and optimize campaigns.

## Why ChatGPT Matters for Marketers

ChatGPT and similar AI tools offer unprecedented capabilities for content creation, customer service, and data analysis.

### Key Benefits

- **Speed**: Generate content in seconds
- **Scale**: Create personalized content for thousands of customers
- **Consistency**: Maintain brand voice across all channels

## Practical Applications

### 1. Content Creation

Use ChatGPT to brainstorm ideas, create first drafts, and optimize existing content.

### 2. Customer Service

Implement AI-powered chatbots that provide instant, accurate responses.

### 3. Data Analysis

Analyze customer feedback and extract actionable insights.

## Best Practices

1. Always review and edit AI-generated content
2. Maintain your brand voice
3. Use AI as a tool, not a replacement for human creativity
4. Stay transparent about AI usage

## Conclusion

ChatGPT and generative AI are powerful tools that can amplify your marketing efforts when used strategically.`
  }
];
```

### 6. Save and Test

After adding your article:
1. Save the `articles.ts` file
2. The article will automatically appear on your website
3. Check:
   - Home page (if it's one of the latest 3 in its category)
   - Blog page (should appear in the list)
   - Search for your article
   - Filter by category
   - Click through to read the full article

## Tips for Great Articles

### Writing Effective Excerpts
- Keep it to 2-3 sentences
- Make it compelling and informative
- Include key benefits or takeaways

### Choosing Article IDs
- Use lowercase letters
- Separate words with hyphens
- Make it descriptive: `ai-email-marketing` not `article-1`
- Keep it unique

### Content Structure
- Start with a clear introduction
- Use headings to organize content (H1, H2, H3)
- Include practical examples
- End with actionable takeaways
- Break up long paragraphs

### Categories
Only two categories are available:
- **AI**: For articles about artificial intelligence, machine learning, neural networks, generative AI, etc.
- **Marketing Automation**: For articles about email automation, CRM, lead scoring, workflows, etc.

## Advanced: Adding Custom Images

Currently, all articles use a placeholder image. To add custom images:

1. Place your image in the `public/images/` folder
2. Update the `image` property: `image: '/images/your-image.jpg'`

Example:
```typescript
{
  // ... other properties ...
  image: '/images/ai-business-2025.jpg',
  // ... rest of article ...
}
```

## Troubleshooting

### Article doesn't appear
- Check that the syntax is correct (all commas, quotes, and brackets)
- Verify the category is exactly `'AI'` or `'Marketing Automation'`
- Make sure the article ID is unique

### Content not formatting correctly
- Ensure you're using backticks (`) for multi-line content
- Check that markdown syntax is correct
- Preview markdown in an editor if unsure

### Article shows on wrong page
- Verify the `category` field matches exactly
- Check the `date` field is recent if expecting it on home page

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all syntax (commas, brackets, quotes)
3. Look at existing articles as examples
4. Make sure dates are in YYYY-MM-DD format

---

Happy writing! 🚀
