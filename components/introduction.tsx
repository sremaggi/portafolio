import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-10 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <div className="flex justify-center md:justify-end ">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden ">
            <Image
              src="/av-1.jpeg"
              priority
              layout="fill"
              objectFit="cover"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-md ml-2">
        <h1 className="mb-1 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-3">
            Sebastián Remaggi Flores
       
          </h1>
          <h3 className="mb-1 text-xl leading-tight text-center md:text-left md:text-2xl md:mb-3">
            Software
            <TypeAnimation
              sequence={[" Engineer", 2000, " Lover", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h3>




          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/contact"
              className="px-3 py-2 my-1 transition-all border-2 cursor-pointer text-md w-fit  text-slate-100 border-secondary rounded-xl hover:shadow-md hover:shadow-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
