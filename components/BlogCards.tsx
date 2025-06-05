import { FocusCards } from "@/components/ui/focus-cards";
import { prisma } from "@/lib/prisma";

export async function BlogCards() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: {
          firstname: true,
          image: true,
          email: true,
          lastname: true,
          id: true,
        },
      },
    },
  });

  const cards = blogs.map((blog) => ({
    title: blog.title,
    desc: blog.content,
    cardId: blog.id,
    src: blog.img,
    category: blog.category,
    slug: blog.slug,
    views: blog.views,
    likes: blog.likes,
    dislikes: blog.dislikes,
    createdAt: blog.createdAt.toISOString(),
    user: {
      name: blog.author.firstname + " " + blog.author.lastname,
      image: blog.author.image || "",
      id: blog.author.id,
    },
  }));

  return <FocusCards cards={cards} />;
}
