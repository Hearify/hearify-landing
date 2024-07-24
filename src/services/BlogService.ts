import type { TopicPreview, Topic } from '@/types/topic';

class BlogService {
  public static loadTopicPreviews = async (): Promise<TopicPreview[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/topics.json`);
    return response.json();
  };

  public static loadTopic = async (slug: string): Promise<Topic> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}.json`);
    return response.json();
  };

  public static loadTopicMarkdown = async (slug: string): Promise<string> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}.md`);
    return response.text();
  };
}

export default BlogService;
