import SignupForm from "@/components/signup-form";

export default function Register() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center" />

      {/* Gradient overlay: dark on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black/70" />

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <SignupForm />
      </div>
    </div>
  );
}
