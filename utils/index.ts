import { client } from "@/sanity/lib/client"

// Schedule a blog post
export const scheduledBlogPostAt = async (postId: string, scheduledAt: Date) => {
    await client.patch(postId).set({scheduledAt}).commit();
}

// Delete a blog post
export const deleteBlogPost = async (postId: string) => {
    await client.patch(postId).set({ deleteAt: new Date() }).commit();
}

// Get all scheduled blog posts
export const getScheduledBlogPosts = async (): Promise<any[]> => {
    const query = `*[_type == "blog" && scheduledAt != null]`;
    const posts = await client.fetch(query);
    return posts;
  };

  // Get all published blog posts
export const getPublishedBlogPosts = async (): Promise<any[]> => {
    const query = `*[_type == "blog" && publishedAt != null && deletedAt == null]`;
    const posts = await client.fetch(query);
    return posts;
  };