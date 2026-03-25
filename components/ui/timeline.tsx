"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  color?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-16 sm:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center ml-2 sm:ml-3"
              >
                <div
                  className="h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2"
                  style={{
                    backgroundColor: item.color
                      ? `${item.color}25`
                      : "hsl(var(--muted))",
                    borderColor: item.color || "hsl(var(--border))",
                  }}
                />
              </div>
              <h3 className="hidden md:block text-xl md:text-5xl font-bold text-muted-foreground pl-4">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-14 pr-2 sm:pl-20 sm:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground/40">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
            left: "22px",
          }}
          className="absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-border to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] sm:left-[30px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-emerald-500 via-primary to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
