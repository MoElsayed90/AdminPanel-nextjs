import Image from "next/image";
import IPhone from "@/public/Iphone Image.png"

const Hero = () => {
  return (
    <div className="bg-[#E3EDF6] mt-4">
      <div className="container grid md:grid-cols-2 ">
        <div className="flex justify-center items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">$999.00</span>
            </p>
            <h1 className="text-topHeadingPrimary font-bold text-4x1 md:text-5x1">
              The best note book collection 2023
            </h1>
            <h3 className="text-2x1 font-['Oregano', cursive]">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>
            <a
              className="inline-block bg-slate-600 rounded-md px-6 py-3 hover:bg-accent hover: text-white"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image  src={IPhone} alt={"Hero"} width={300} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
