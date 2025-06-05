import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

export default BlogCardSkeleton;
