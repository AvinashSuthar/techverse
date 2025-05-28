type BlogPageProps = {
  params: {
    blogId: string[];
  };
};
export default async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1>Blog Page</h1>
      <p>Slug: {blogId}</p>
    </div>
  );
}
