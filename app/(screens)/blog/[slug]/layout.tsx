import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function BlogLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <ScrollProgress />
        <div className="w-full max-w-3xl px-4 py-8">{children}</div>
        </div>
    );
    }