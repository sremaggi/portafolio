import { dataPortfolio } from "@/data";
import { CoverParticles } from "@/components/cover-particles";

import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <CoverParticles />

      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-1">
          My <span className="font-bold text-secondary">Projects</span>
        </h1>

        <div className="relative z-10 grid max-w-5xl w-full gap-6 mx-auto mt-4 md:grid-cols-2">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
