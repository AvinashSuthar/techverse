import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content/blogs");

type Frontmatter = {
  title: string;
  date: string;
};

export function getAllSlugs() {
  return fs
    .readdirSync(BLOG_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data} = matter(source);

  return {
    content,
    frontmatter: data as Frontmatter,
  };
}
