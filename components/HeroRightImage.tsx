import Image from "next/image";
import GradientBadge from "./ui/GradientBadge";
import AnimationController from "./AnimationController";
import ProximityAnimator from "./ProximityAnimator";
import MagneticAttraction from "./MagneticAttraction";

export default function HeroRightImage() {
  return (
    <div className="  proximity-box z-10 relative w-full h-full flex items-center justify-center overflow-hidden ">
      <MagneticAttraction selector=".magnetic-button" />

      <Image
        src="/HeroImage.png"
        alt="Hero Image"
        width={500}
        height={500}
        className=" w-[90%] h-[90%] object-cover rounded-lg shadow-lg"
        priority
      />

      <GradientBadge
        classname="top-[50%] magnetic-button  right-[80%]"
        startColor="blue"
        endColor="green"
        text="demo"
      />
      <GradientBadge
        classname="top-[20%] magnetic-button   right-[70%]"
        startColor="blue"
        endColor="purple"
        text="blogs"
      />
      <GradientBadge
        classname="top-[10%] magnetic-button  right-[50%]"
        startColor="purple"
        endColor="green"
        text="blogs"
      />
      <GradientBadge
        classname="top-[10%] magnetic-button right-[30%] "
        startColor="blue"
        endColor="red"
        text="blogs"
      />
      <GradientBadge
        classname="top-[50%] magnetic-button  right-[20%]"
        startColor="red"
        endColor="green"
        text="blogs"
      />
    </div>
  );
}
