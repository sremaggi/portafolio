import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import { CoverParticles } from "@/components/cover-particles";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      
      <CoverParticles />
      <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 mt-32">My <span className="font-bold text-secondary">Services</span></h1>
      <div className="mt-1 " >
        {/* SLIDER */}
        <div>

          <div>
            <SliderServices />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
