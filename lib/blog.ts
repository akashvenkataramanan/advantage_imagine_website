// Blog Types and Utilities

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: "case-discussion" | "radiology-insights" | "patient-education";
  featured: boolean;
  image?: string;
  tags: string[];
  content?: string;
}

export interface BlogCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "case-discussion",
    title: "Case Discussions",
    description: "Interesting diagnostic cases and imaging findings",
    icon: "FileText",
  },
  {
    id: "radiology-insights",
    title: "Radiology Insights",
    description: "Educational content about imaging techniques",
    icon: "Lightbulb",
  },
  {
    id: "patient-education",
    title: "Patient Education",
    description: "Helpful information for patients undergoing scans",
    icon: "BookOpen",
  },
];

// Placeholder for blog posts - to be filled later
export const BLOG_POSTS: BlogPost[] = [];

// Utility function to get featured posts
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured).slice(0, limit);
}

// Utility function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category);
}

// Utility function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}
