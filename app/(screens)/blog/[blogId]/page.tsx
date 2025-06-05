import { prisma } from "@/lib/prisma";

type BlogPageProps = {
  params: {
    blogId: string;
  };
};
export default async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = await params;
  const blog = await prisma.blog.findUnique({
    where: {
      slug: blogId,
    },
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1>Blog Page</h1>
      <p>Slug: {blogId}</p>
      <div>{blog?.title}</div>
      <div>
        {
          blog?.content
        }
      </div>
    </div>
  );
}
