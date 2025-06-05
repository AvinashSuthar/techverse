import { Repeat } from "lucide-react";
import { BlogCards } from "./BlogCards";
import FeaturedBlogs from "./FeaturedBlogs";
import LatestBlogs from "./LatestBlogs";
import SearchBlogs from "./SearchBlogs";
import { Button } from "./ui/button";
import { Suspense } from "react";
import BlogCardSkeleton from "./skeleton/BlogCardSkeleton";

export default function () {
  return (
    <div className="border-t border-t-white w-[90%] mx-auto h-[100vh] text-center">
      <h1
        className="text-6xl fade-in-up
      p-6 font-bold"
      >
        Discover our Latest Blogs
      </h1>
      <p className="text-lg text-gray-300 mb-8 fade-in-up">
        Explore our collection of insightful and up-to-date blog posts below.
      </p>
      <SearchBlogs />
      <div className="flex flex-col justify-center  sm:flex-row  mt-10 h-full">
        {/* BlogCards */}
        <div className=" w-full ">
          <Suspense fallback={<BlogCardSkeleton />}>
            <BlogCards />
          </Suspense>
          <Button
            variant={"outline"}
            className="fade-in-up mt-10 hover:scale-110 transition-all duration-500 active:scale-90 "
          >
            <Repeat />
            Load More Blogs
          </Button>
        </div>

        {/* Right side div */}
        <div className="hidden sm:flex sm:flex-col  gap-4">
          <FeaturedBlogs />
          <LatestBlogs />
        </div>
      </div>
    </div>
  );
}
