"use client";

import { useState } from "react";
import type { CoreServiceId } from "@/lib/core-services-home-data";
import { CORE_SERVICES } from "@/lib/core-services-home-data";

import { CoreServicesGrid } from "@/components/sections/core-services-grid";
import { HowWeBuild } from "@/components/sections/how-we-build";
import { AIWorkflowVisual } from "@/components/sections/ai-workflow-visual";
import { CaseStudiesResults } from "@/components/sections/case-studies-results";
import { CoreServicesRightRailTabs } from "@/components/sections/core-services-right-rail-tabs";
import { HeroSection } from "./hero-section";

export function HomeCoreServices() {
  const [activeServiceId, setActiveServiceId] = useState<CoreServiceId>(
    CORE_SERVICES[0].id,
  );
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CoreServicesRightRailTabs
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={(id) => setActiveServiceId(id)}
        onHoverPauseChange={(paused) => setIsPaused(paused)}
      />

      <CoreServicesGrid
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={(id) => setActiveServiceId(id)}
        paused={isPaused}
      />

      <HowWeBuild serviceId={activeServiceId} />
      <AIWorkflowVisual serviceId={activeServiceId} />
      <CaseStudiesResults serviceId={activeServiceId} />
    </div>
  );
}

export function HomeCoreServicesControlled({
  activeServiceId,
  onActiveServiceIdChange,
  onPauseChange,
}: {
  activeServiceId: CoreServiceId;
  onActiveServiceIdChange: (id: CoreServiceId) => void;
  onPauseChange?: (paused: boolean) => void;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsPaused(true);
        onPauseChange?.(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        onPauseChange?.(false);
      }}
    >
      <CoreServicesRightRailTabs
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={onActiveServiceIdChange}
        onHoverPauseChange={(paused) => {
          setIsPaused(paused);
          onPauseChange?.(paused);
        }}
      />

      <CoreServicesGrid
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={onActiveServiceIdChange}
        paused={isPaused}
      />

      <HeroSection
        activeServiceId={activeServiceId}
        onActiveServiceIdChange={onActiveServiceIdChange}
        paused={isPaused}
      />

      <HowWeBuild serviceId={activeServiceId} />
      <AIWorkflowVisual serviceId={activeServiceId} />
      <CaseStudiesResults serviceId={activeServiceId} />
    </div>
  );
}
