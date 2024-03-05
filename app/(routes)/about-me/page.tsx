"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import { CoverParticles } from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
      
            <CoverParticles />
            <ContainerPage>
            <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">My <span className="font-bold text-secondary">Profesional Career</span></h1>

           

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;