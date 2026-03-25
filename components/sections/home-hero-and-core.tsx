"use client";

import { useState } from "react";
import type { CoreServiceId } from "@/lib/core-services-home-data";
import { CORE_SERVICES } from "@/lib/core-services-home-data";

import { HeroSection } from "@/components/sections/hero-section";
import { HomeCoreServicesControlled } from "@/components/sections/home-core-services";

export function HomeHeroAndCore() {
  const [activeServiceId, setActiveServiceId] = useState<CoreServiceId>(
    CORE_SERVICES[0].id,
  );
  const [isGlobalPaused, setIsGlobalPaused] = useState(false);

  return (
    <>
      <HeroSection
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={setActiveServiceId}
        paused={isGlobalPaused}
      />
      <HomeCoreServicesControlled
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={setActiveServiceId}
        onPauseChange={setIsGlobalPaused}
      />
    </>
  );
}

