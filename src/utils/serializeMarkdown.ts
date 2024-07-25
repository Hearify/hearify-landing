import rehypeSlug from 'rehype-slug';
import { serialize } from 'next-mdx-remote/serialize';

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeSlug],
  },
};

const serializeMarkdown = async (mdxText: string) => {
  return serialize(mdxText, options);
};

export default serializeMarkdown;
