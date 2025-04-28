import { Navbartop } from "@/components/Navbar";
import { ModeToggle } from "@/components/theme-select";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");
  return <main>Home page</main>;
}
