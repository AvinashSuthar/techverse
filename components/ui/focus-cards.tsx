"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./badge";

export const Card = React.memo(
  ({
    card,
    cardId,
    index,
    hovered,
    setHovered,
    desc,
    slug
  }: {
    card: Blog;
    cardId: string;
    index: number;
    hovered: number | null;
    desc: string;
    slug: string;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link href={`/blog/${slug}`}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "fade-in-up rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          hovered === index && "cursor-pointer"
        )}
      >
        <img
          loading="lazy"
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full"
        />

        {/* Dark overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        ></div>

        {/* Content container */}
        <div className="absolute bottom-0 w-full px-4 pb-6">
          {/* Description */}
          <p
            className={cn(
              "text-sm  text-justify transition-all duration-300 mb-2",
              hovered === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            {card.desc.slice(0, 100)}...
          </p>

          {/* Title always visible at bottom */}
          <div className="block text-justify text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title.length > 30
              ? card.title.slice(0, 30) + "..."
              : card.title}
          </div>
        </div>

        {/* Optional badge */}
        <div className="absolute top-4 left-4">
          <Badge
            variant={"outline"}
            className="rounded-full px-3 py-2 border border-white/50 bg-black/30"
          >
            {card.category}
          </Badge>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

export type Blog = {
  title: string;
  desc: string;
  cardId: string;
  src: string;
  category: string;
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  slug: string;
  user: {
    name: string;
    image: string;
    id: string;
  };
};

export function FocusCards({ cards }: { cards: Blog[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-20  mx-auto md:px-8 w-[90%]  p-3">
      {cards.map((card, index) => (
        <Card
          slug={card.slug}
          cardId={card.cardId}
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          desc={card.desc}
        />
      ))}
    </div>
  );
}
