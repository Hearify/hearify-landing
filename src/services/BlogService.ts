import type { Author } from '@/types/author';
import type { Topic, TopicPreview } from '@/types/topic';

class BlogService {
  public static loadTopicPreviews = async (): Promise<TopicPreview[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/topics.json`);
    return response.json();
  };

  public static loadAuthors = async (): Promise<Author[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/authors.json`);
    return response.json();
  };

  public static loadTopicMarkdown = async (slug: string): Promise<string> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/topics/${slug}.md`);
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

  public static loadTopic = async (slug: string): Promise<Topic> => {
    const topics = await BlogService.loadTopicPreviews();
    const topic = topics.find(item => item.slug === slug);

    if (!topic) {
      throw new Error(`Topic with slug ${slug} not found`);
    }

    const author = await BlogService.loadAuthor(topic.authorSlug);
    const editor = await BlogService.loadAuthor(topic.editorSlug);
    const suggestions = topics
      .filter(item => item.slug !== slug)
      .slice(0, 3)
      .toSorted(() => 0.5 - Math.random());

    console.log(topics);

    return {
      ...topic,
      author,
      editor,
      suggestions,
    };
  };
}

export default BlogService;
