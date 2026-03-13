"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";

interface ParallaxProduct {
  title: string;
  link: string;
  thumbnail: string;
  description?: string;
}

interface HeroParallaxProps {
  products: ParallaxProduct[];
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export const HeroParallax = ({
  products,
  badge = "Industries",
  title = (
    <>
      The Ultimate <br /> development studio
    </>
  ),
  subtitle = (
    <>
      We build beautiful products with the latest technologies and frameworks.
      We are a team of passionate developers and designers that love to build
      amazing products.
    </>
  ),
}: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1000, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [1000, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-220, 220]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex  flex-col overflow-hidden bg-transparent "
    >
      <Header badge={badge} title={title} subtitle={subtitle} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-10 flex flex-row-reverse gap-10 px-4">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-10 flex flex-row- gap-10 px-4">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-8 flex flex-row-reverse gap-6 px-4">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) => {
  return (
    <div className="relative left-0 mx-auto w-full max-w-7xl px-4 pb-12 pt-10 md:pb-20 md:pt-24">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          {badge}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Industries <br />
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-20 shrink-0 rounded-full bg-primary sm:w-40 lg:w-80" />
          <span className="text-primary">We Serve</span>
        </div>
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        minWidth: "30rem",
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-120 shrink-0 overflow-hidden"
    >
      <a
        href={product.link}
        className="relative block h-full w-full group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 30rem"
          className="object-cover object-center"
          alt={product.title}
        />
      </a>
      {/* Always-visible title pill */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
        {product.title}
      </div>
      {/* Hover overlay with title + description */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-15 transition-opacity duration-300 group-hover/product:opacity-100">
        <div className="w-full px-4 pb-4 text-white">
          <p className="text-sm font-semibold">{product.title}</p>
          {product.description && (
            <p className="mt-1 text-xs text-white/80 leading-snug">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
