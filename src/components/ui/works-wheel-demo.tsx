"use client";

import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

const WORKS: WorksWheelItem[] = [
  {
    title: "GestureBI Dashboard",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    href: "#gesturebi",
  },
  {
    title: "AI Candidate Ranker",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    href: "#candidate-ranking",
  },
  {
    title: "RAG Study Chatbot",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "#rag-chatbot",
  },
  {
    title: "Movie Recommender",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    href: "#movie-recommender",
  },
  {
    title: "Online Crime Portal",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    href: "#crime-report",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="bg-background text-foreground w-full h-screen">
      <WorksWheel items={WORKS} label="Works '26" action="View" />
    </div>
  );
}
