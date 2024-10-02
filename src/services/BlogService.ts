import type { Author } from '@/types/author';
import type { Article, ArticlePreview } from '@/types/article';
import type { Quiz, QuizPreview } from '@/types/quiz';

class BlogService {
  public static loadArticlePreviews = async (): Promise<ArticlePreview[]> => {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/hearify-9dd16.appspot.com/o/articles.json?alt=media`,
    );
    return response.json();
  };

  public static loadQuizPreviews = async (): Promise<QuizPreview[]> => {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/hearify-9dd16.appspot.com/o/quizzes.json?alt=media`,
    );
    return response.json();
  };

  public static loadAuthors = async (): Promise<Author[]> => {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/hearify-9dd16.appspot.com/o/authors.json?alt=media`,
    );
    return response.json();
  };

  public static loadArticleMarkdown = async (slug: string): Promise<string> => {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/hearify-9dd16.appspot.com/o/articles%2F${slug}.mdx?alt=media`,
    );
    return response.text();
  };

  public static loadQuizMarkdown = async (slug: string): Promise<string> => {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/hearify-9dd16.appspot.com/o/quizzes%2F${slug}.md?alt=media`,
    );
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

  public static loadQuiz = async (slug: string): Promise<Quiz> => {
    const quizzes = await BlogService.loadQuizPreviews();
    const quiz = quizzes.find(item => item.slug === slug);

    if (!quiz) {
      throw new Error(`Quiz with slug ${slug} not found`);
    }

    const author = await BlogService.loadAuthor(quiz.authorSlug);
    const suggestions = quizzes
      .filter(item => item.slug !== slug)
      .slice(0, 3)
      .sort(() => 0.5 - Math.random());

    return {
      ...quiz,
      author,
      suggestions,
    };
  };
}

export default BlogService;
