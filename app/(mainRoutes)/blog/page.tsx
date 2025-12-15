import type { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog-hero";
import { BlogPosts } from "@/components/sections/blog-posts";

export const metadata: Metadata = {
  title: "Blog - NxTech Solutions | IT, AI, Marketing & Business Insights",
  description: "Discover insightful resources and expert advice on IT services, AI automation, digital marketing, SaaS, and business growth strategies from our seasoned team.",
  keywords: "IT blog, AI automation, digital marketing, SaaS, business growth, technology insights, cybersecurity, cloud solutions",
  openGraph: {
    title: "Blog - NxTech Solutions",
    description: "Expert insights on IT, AI, Marketing, SaaS, and Business Growth",
    type: "website",
  },
};

export default function Blog() {
  return (
    <>
      <BlogHero />
      <BlogPosts />
    </>
  );
}

