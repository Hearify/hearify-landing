import type { Author } from '@/types/author';
import type { Article, ArticlePreview } from '@/types/article';

class BlogService {
  public static loadArticlePreviews = async (): Promise<ArticlePreview[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/articles.json`);
    return response.json();
  };

  public static loadAuthors = async (): Promise<Author[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/authors.json`);
    return response.json();
  };

  public static loadArticleMarkdown = async (slug: string): Promise<string> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/articles/${slug}.md`);
    return response.text();
  };

  public static loadAuthor = async (slug: string): Promise<Author> => {
    const authors = await BlogService.loadAuthors();
    const author = authors.find(item => item.slug === slug);

    if (!author) {
      throw new Error(`Author with slug ${slug} not found`);
    }

    return author;
  };

  public static loadArticle = async (slug: string): Promise<Article> => {
    const articles = await BlogService.loadArticlePreviews();
    const article = articles.find(item => item.slug === slug);

    if (!article) {
      throw new Error(`Article with slug ${slug} not found`);
    }

    const author = await BlogService.loadAuthor(article.authorSlug);
    const editor = await BlogService.loadAuthor(article.editorSlug);
    const suggestions = articles
      .filter(item => item.slug !== slug)
      .slice(0, 3)
      .sort(() => 0.5 - Math.random());

    return {
      ...article,
      author,
      editor,
      suggestions,
    };
  };
}

export default BlogService;
