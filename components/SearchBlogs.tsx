"use client";
import { Search } from "lucide-react";
import React from "react";

const SearchBlogs = () => {
  const handleClick = () => {
    console.log("Search button clicked");
  };
  return (
    <div className="fade-in-up relative flex justify-center">
      <label htmlFor="search-blog" className="sr-only">
        Search blogs
      </label>
      <input
        id="search-blog"
        className="w-[90%] sm:w-[60%] pr-12 relative focus-within:ring-0 focus:ring-0 focus:outline-none border rounded-md p-4 text-lg transition-all duration-200"
        placeholder="Search blogs"
        title="Search blogs"
      />
      <Search
        onClick={() => handleClick()}
        className="absolute cursor-pointer right-10 sm:right-[21%] top-1/2 -translate-y-1/2 text-gray-500 "
      />
    </div>
  );
};

export default SearchBlogs;
