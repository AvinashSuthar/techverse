import { FocusCards } from "@/components/ui/focus-cards";
import { getAllSlugs } from "@/lib/mdx";
import { prisma } from "@/lib/prisma";

export async function BlogCards() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // const blogs = await prisma.blog.findMany({
  //   orderBy: { createdAt: "desc" },
  //   include: {
  //     author: {
  //       select: {
  //         image: true,
  //         email: true,
  //         id: true,
  //       },
  //     },
  //   },
  // });
  const blogs = getAllSlugs();

  // const cards = blogs.map((blog) => ({
  //   title: blog.title,
  //   desc: blog.content,
  //   cardId: blog.id,
  //   src: blog.img,
  //   category: blog.category,
  //   slug: blog.slug,
  //   views: blog.views,
  //   likes: blog.likes,
  //   dislikes: blog.dislikes,
  //   createdAt: blog.createdAt.toISOString(),
  //   user: {
  //     name: blog.author.email.split("@")[0],
  //     image: blog.author.image || "",
  //     id: blog.author.id,
  //   },
  // }));

  return <FocusCards cards={blogs} />;
}
