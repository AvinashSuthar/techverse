import AnimationController from "@/components/AnimationController";
import DiscoverBlogs from "@/components/DiscoverBlogs";
import Hero from "@/components/Hero";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <main>
      <AnimationController selector=".spring-right" animation="spring-right" />

      <Hero />
      <DiscoverBlogs />
    </main>
  );
}
