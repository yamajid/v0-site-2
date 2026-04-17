import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  // Get all blog posts
  const posts = await getCollection('blog');
  
  // Handle empty collection
  if (!posts || posts.length === 0) {
    return rss({
      title: 'v0-Guide Blog',
      description: 'Latest tutorials, reviews, and insights about v0 by Vercel',
      site: site || 'https://v0-guide.com',
      items: [],
      stylesheet: '/rss/styles.xsl',
      xmlns: {
        content: 'http://purl.org/rss/1.0/modules/content/',
      },
    });
  }
  
  // Sort by date
  // const sortedPosts = posts.sort(
  //   (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  // );

  // return rss({
  //   title: 'v0-Guide Blog',
  //   description: 'Latest tutorials, reviews, and insights about v0 by Vercel',
  //   site: site || 'https://v0-guide.com',
  //   items: sortedPosts.map((post) => ({
  //     link: `/blog/${post.slug}/`,
  //     title: post.data.title,
  //     description: post.data.description,
  //     pubDate: post.data.publishDate,
  //     author: post.data.author,
  //     categories: [post.data.category, ...post.data.tags],
  //     customData: `
  //       <content:encoded><![CDATA[${post.render().content}]]></content:encoded>
  //     `,
  //   })),
  //   // Optional: customize RSS XML
  //   stylesheet: '/rss/styles.xsl',
  //   xmlns: {
  //     content: 'http://purl.org/rss/1.0/modules/content/',
  //   },
  // });
};
