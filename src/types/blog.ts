
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  image: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

export interface BlogPostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
}
