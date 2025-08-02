import { getAllSlugs, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Frontmatter = {
    title: string;
    date: string;
};

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const { content, frontmatter } = await getPostBySlug(params.slug);

    const typedFrontmatter = frontmatter as Frontmatter;

    return (
        <article className="prose prose-invert  text-primary mx-auto max-w-3xl dark:prose-invert">
            <h1 className='text-primary'>{typedFrontmatter.title}</h1>
            <p className=" text-sm text-primary">{typedFrontmatter.date}</p>
            <MDXRemote  source={content} />
        </article>
    );
}
