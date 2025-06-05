import AnimationController from "./animations/AnimationController";
import HeroRightImage from "./HeroRightImage";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around h-[90vh] p-4 gap-3">
      <AnimationController selector=".fade-in-up" />
      <AnimationController selector=".scale-in" animation="scale-in" />

      <div className="w-full md:w-[50%] h-[90%] sm:h-[110%] flex flex-col justify-evenly items-start p-10">
        <div>
          <h1 className="fade-in-up text-5xl font-bold mb-4 leading-[1.3]">
            Welcome to TechVerse – Your Gateway to the Latest in Tech!
          </h1>
          <p className="fade-in-up text-lg py-4 text-gray-600 ">
            Explore insightful articles, tutorials, and news from the world of
            technology.
          </p>
        </div>
        <div className="  flex gap-10 flex-col sm:flex-row ">
          <Button className="fade-in-up bg-blue-400 rounded hover:bg-black border border-blue-400 text-white transition-all duration-200 font-semibold px-10 py-6 cursor-pointer">
            Start Writing Now
          </Button>
          <Button
            variant="secondary"
            className="fade-in-up transition-all duration-200 font-semibold px-10 py-6 rounded border border-blue-400 bg-black hover:bg-blue-400 cursor-pointer
             "
          >
            Become a Member
          </Button>
        </div>

        <div className="flex flex-col mt-6 text-white">
          <ul className="flex gap-10 text-3xl">
            <li className="fade-in-up">
              <span className="font-semibold">10k+</span>
              <br />
              <span className="text-base text-gray-300">Community Members</span>
            </li>
            <li className="fade-in-up">
              <span className="font-semibold">20k+</span> <br />
              <span className="text-base text-gray-300">Articles Written</span>
            </li>
            <li className="fade-in-up">
              <span className="font-semibold">1M+</span> <br />{" "}
              <span className="text-base text-gray-300">Views </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full sm:w-[50%] h-[90%] p-10  items-center justify-center md:block hidden">
        <div className="absolute w-[600px] top-0 right-0 h-[500px] bg-blue-800 rounded-full blur-[190px] opacity-100 z-0"></div>
        <HeroRightImage />
      </div>
    </div>
  );
}
