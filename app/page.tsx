"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
     
      <div className="flex min-h-[100vh] h-full bg-gradient-cover bg-slate-600">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
