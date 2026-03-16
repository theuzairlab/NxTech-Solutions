import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "dotenv";
import { resolve } from "path";

// Load environment variables from .env files
config({ path: resolve(__dirname, "../.env") });
config({ path: resolve(__dirname, "../.env.local") });

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("❌ DATABASE_URL environment variable is not set!");
  console.error("Please check your .env or .env.local file.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: databaseUrl,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
});

type BlogInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image?: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
};

async function main() {
  console.log("🌱 Seeding updated NxTech Nova blogs...");

  // Ensure categories exist (re-use the same taxonomy as existing seed)
  const categoryMap = new Map<string, string>();

  const categories = [
    { name: "AI & Automation", slug: "ai-automation" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "SaaS", slug: "saas" },
    { name: "IT Services", slug: "it-services" },
    { name: "Business Growth", slug: "business-growth" },
    { name: "Technology", slug: "technology" },
  ];

  for (const cat of categories) {
    const existing = await prisma.blogCategory.findUnique({
      where: { slug: cat.slug },
    });

    if (!existing) {
      const created = await prisma.blogCategory.create({
        data: {
          slug: cat.slug,
          name: cat.name,
        },
      });
      categoryMap.set(cat.name, created.id);
      console.log(`✅ Created category: ${cat.name}`);
    } else {
      categoryMap.set(cat.name, existing.id);
      console.log(`ℹ️  Category already exists: ${cat.name}`);
    }
  }

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "NxTech Nova";

  // NOTE: Content below is taken from “Current Blogs Updation (NxTech Nova).pdf”
  // and lightly formatted as Markdown.
  const blogPosts: BlogInput[] = [
    {
      title:
        "The Human Side of Growth: Why Your 2026 Digital Strategy Needs a Soul",
      slug: "digital-marketing-strategies-2026-human-side-of-growth",
      excerpt:
        "Discover how NxTech Nova is redefining the digital landscape by blending advanced AI analytics with human‑centered marketing strategies designed to build lasting brand authority.",
      category: "Digital Marketing",
      tags: [
        "Digital Marketing",
        "AI",
        "Human-Centric",
        "Strategy",
        "Growth",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      publishedAt: "2026-01-10",
      readTime: 14,
      featured: true,
      content: `
## The Human Side of Growth: Why Your 2026 Digital Strategy Needs a Soul

Picture this: it’s a quiet Tuesday morning, and Sarah, the dedicated owner of a growing e‑commerce boutique, sits staring at her laptop with a lukewarm coffee in hand. She has spent hours spiraling down a rabbit hole of “marketing hacks” and “AI‑automated growth secrets,” yet her sales graphs look like a flat line.

She is overwhelmed, confused, and tired of being sold to by robots. Sarah’s story is the daily reality for thousands of business owners in 2026. The digital world has become so loud that most people have learned to tune out anything that feels like a generic sales pitch.

Choosing the right partner or tool in this environment feels less like a business decision and more like a high‑stakes gamble. You are not just looking for a service provider anymore; you are looking for a lifeline that understands your brand DNA.

This is why we curated this guide—to help you cut through the static and find real solutions. We analyzed the current landscape to identify who is delivering measurable results and who is just repeating buzzwords. Whether you are a fresh startup or a seasoned enterprise, the following breakdown gives you clarity to stop gambling and start growing.

### The Modern Digital Marketing Playbook

- **Step 1:** Conduct a comprehensive digital marketing audit to find your hidden leaks.
- **Step 2:** Align your brand with an enterprise digital marketing agency that scales with you.
- **Step 3:** Implement B2B digital marketing strategies that focus on long‑term relationships.
- **Step 4:** Use digital marketing for e‑commerce to turn visitors into loyal advocates.

### 1. NxTech Nova: The Gold Standard of Strategic Growth

When it comes to real market impact and sustainable scaling, NxTech Nova stands in a league of its own. Unlike firms that treat every client like a line item on a spreadsheet, we operate as a dedicated extension of your team.

We specialize in bridging the gap between high‑level technology and genuine human connection. Our methodology goes beyond “running ads”—we build digital ecosystems designed for longevity and high conversion rates, powered by deep behavioral analysis and creative storytelling.

- **Best For:** Ambitious brands and established enterprises seeking data‑backed, human‑centric scaling solutions.
- **Key Strength:** Seamless integration of advanced AI analytics with bespoke, high‑quality creative.
- **Why It Works:** We remove technical and creative burden so founders can focus on vision and leadership.

### The Modern Evolution of the Digital Marketing Audit

In 2026, a proper audit looks at your entire digital footprint: from the tone of your social replies to the speed of your mobile checkout. A real audit explains exactly why people leave without buying and where your message falls out of sync with what your audience actually needs.

Done right, this becomes the foundation for sustainable digital marketing strategy—not just polished dashboards.

### Crafting Your Path to Digital Success

Whether you are choosing a startup digital marketing agency or scaling across regions, the core principles remain: solve problems, build trust, and stay consistent.

The most successful brands in 2026 remember there is a human being on the other side of the screen. They use AI and automation to serve people—not to overwhelm them.
      `,
    },
    {
      title:
        "The Intelligence Revolution: Why Your Business Needs a Human‑Centric AI Strategy",
      slug: "future-of-ai-in-business-automation-human-centric-strategy",
      excerpt:
        "The jump from manual operations to full‑scale automation is the single biggest challenge for modern enterprises. In 2026, the goal isn’t just to “use AI,” but to build human‑centric systems that think, learn, and convert.",
      category: "AI & Automation",
      tags: [
        "AI Automation",
        "Business Automation",
        "Marketing Automation",
        "Strategy",
      ],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      publishedAt: "2026-01-12",
      readTime: 14,
      featured: true,
      content: `
## The Future of AI in Business Automation: Moving Beyond the Hype

Imagine a world where your business never sleeps. While you are resting, your systems are qualifying leads, your AI marketing tools are optimizing ad spend in real time, and your customer queries are resolved instantly—with a human touch.

This is the promise of business automation services. For many brands, it is already reality.

The problem is that many owners feel like they are drowning in tech‑speak. They hear about machine‑learning marketing automation but don’t know how it translates to the bottom line. The secret is not complexity; it is integration—and keeping humans at the center.

### Your Roadmap to a Fully Automated Business

- **Step 1:** Identify friction. Use a business automation consultant to find where your team is wasting hours on repetitive tasks.
- **Step 2:** Start with AI‑assisted marketing to handle lead nurturing and follow‑ups without growing headcount.
- **Step 3:** Scale with enterprise marketing automation to keep your brand message consistent across every digital touchpoint.
- **Step 4:** Secure a done‑for‑you digital marketing partner to manage the technical heavy lifting while you focus on strategy.

### NxTech Nova: The Leader in Intelligent Automation

NxTech Nova merges cutting‑edge automation with actual business growth. We don’t just sell software; we design fully automated business models tailored to your goals.

- **Best For:** Fast‑growing businesses needing startup agility with enterprise‑grade tech.
- **Key Strength:** Workflow automation for small and mid‑sized businesses plus advanced analytics.
- **Why It Works:** “Human‑in‑the‑loop” AI that keeps your brand authentic while machines handle the busywork.

From automated outbound calling to automated invoicing, the result is the same: less manual overhead and more time focused on revenue.
      `,
    },
    {
      title: "Engineering Growth: Why Scalability Is the Soul of Modern SaaS",
      slug: "building-scalable-saas-products-2026",
      excerpt:
        "The difference between a SaaS product that hits a ceiling and one that dominates its market lies in its foundation. In 2026, scalability is not a feature you add later—it is the DNA of your product.",
      category: "SaaS",
      tags: ["SaaS", "Scalability", "Product", "Cloud", "Growth"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      publishedAt: "2026-01-15",
      readTime: 13,
      featured: false,
      content: `
## Building Scalable SaaS Products: From Foundation to Market Domination

Imagine launching your platform and getting 10,000 sign‑ups on day one. Within minutes the dashboard freezes, the database crawls, and your support inbox explodes. Your “success” just became your biggest liability.

This is why scalability can’t be bolted on later. It has to be architected from day zero.

### The SaaS Scalability Checklist

- **Step 1:** Align your technical capacity with your lead‑generation pace using a done‑for‑you digital marketing framework.
- **Step 2:** Choose a multi‑tenant architecture that allows you to serve thousands of customers from one robust codebase.
- **Step 3:** Use analytics to see exactly where users drop off in your onboarding funnel.
- **Step 4:** Partner with a startup‑friendly growth team that understands burn rate and investor expectations.

NxTech Nova acts as both growth engine and architecture partner—bridging product, infrastructure, and marketing so your SaaS can scale without breaking.
      `,
    },
    {
      title:
        "Digital Fortresses: Why Cybersecurity Is the Foundation of Trust in 2026",
      slug: "cybersecurity-best-practices-modern-businesses-2026",
      excerpt:
        "In an era where data is more valuable than oil, a single breach can dismantle a decade of brand building in hours. Cybersecurity is no longer a back‑office IT issue—it is the core of customer trust.",
      category: "IT Services",
      tags: ["Cybersecurity", "IT", "Security", "Trust"],
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=600&fit=crop",
      publishedAt: "2026-01-18",
      readTime: 12,
      featured: false,
      content: `
## Cybersecurity Best Practices for Modern Businesses: Protecting Your Digital Assets

Think about your most sensitive data—customer lists, proprietary strategies, financial records. Now imagine a ransom note locking you out of it all. That is daily reality for thousands of firms.

As we lean on digital business automation, we open more doors for attackers. The goal is to make your systems both efficient and secure.

### Modern Security Essentials

- **Step 1:** Run a deep security‑aware digital marketing audit, including SSL and data handling.
- **Step 2:** Move toward a Zero‑Trust model where every access request is verified.
- **Step 3:** Use automation to handle real‑time threat detection and backups.
- **Step 4:** Partner with growth teams that treat security as non‑negotiable.

NxTech Nova integrates security into every campaign and funnel so growth never comes at the cost of trust.
      `,
    },
    {
      title:
        "The Precision Edge: Why Data‑Driven Decisions Are the Pulse of 2026",
      slug: "grow-business-with-data-driven-decisions-2026",
      excerpt:
        "In the modern market, guessing is the fastest way to go bankrupt. Every click, scroll, and bounce is a signal that can be turned into growth—if you know how to read it.",
      category: "Business Growth",
      tags: ["Analytics", "Data", "Business Growth", "Strategy"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      publishedAt: "2026-01-20",
      readTime: 11,
      featured: false,
      content: `
## How to Grow Your Business with Data‑Driven Decisions: Turning Insights into Gold

Most businesses operate on hunches. Their more dangerous competitors operate on data.

The shift from “I think” to “I know” is the most powerful upgrade a founder can make. By wrapping your funnels in analytics, you stop throwing spaghetti at the wall and start building a predictable engine.

### The Data‑Driven Growth Framework

- **Step 1:** Audit your tracking to find broken or missing measurement.
- **Step 2:** Use automation to collect and clean data automatically.
- **Step 3:** Translate numbers into marketing automation workflows that react to user behavior in real time.
- **Step 4:** Partner with a growth team that can turn raw data into decisions.

NxTech Nova specializes in uncovering the “hidden money” in your metrics and building cultures where every decision is backed by evidence.
      `,
    },
    {
      title:
        "Skyward Bound: Why Cloud Migration Is the Engine of Modern Enterprise",
      slug: "cloud-migration-complete-guide-2026",
      excerpt:
        "The physical server room is becoming a relic. In 2026, the agility of a business is measured by how quickly its infrastructure can expand during peaks and contract when things are quiet.",
      category: "IT Services",
      tags: ["Cloud", "Infrastructure", "IT", "Migration"],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      publishedAt: "2026-01-22",
      readTime: 10,
      featured: false,
      content: `
## Cloud Migration: A Complete Guide to Digital Transformation

Cloud migration is like moving your city from a crowded island to a limitless continent. It is not just “uploading files”—it is a strategic shift in how you operate and scale.

NxTech Nova helps brands plan, execute, and optimize this move so marketing, product, and infrastructure all benefit from cloud elasticity.

We focus on phased migrations, performance monitoring, and connecting cloud speed directly to user experience and SEO outcomes.
      `,
    },
    {
      title:
        "The Authority Architecture: Why Content Is the Soul of the 2026 Digital Era",
      slug: "power-of-content-marketing-2026-authority-architecture",
      excerpt:
        "In a world where AI can generate thousands of words in seconds, the value of content has shifted. It’s no longer about volume—it’s about authority, trust, and real human connection.",
      category: "Digital Marketing",
      tags: ["Content Marketing", "Authority", "SEO", "AI"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      publishedAt: "2026-01-25",
      readTime: 12,
      featured: false,
      content: `
## The Power of Content Marketing in 2026: Beyond the Written Word

The brands winning in 2026 are not the ones shouting the loudest; they are the ones teaching the most.

By investing in deep guides, video case studies, and genuinely helpful resources, you position your company as the obvious choice long before a sales call.

NxTech Nova combines storytelling with analytics so every asset has a clear purpose in your funnel—from awareness to closed‑won revenue.
      `,
    },
    {
      title:
        "The 24/7 Digital Concierge: Why Conversational AI Is the New Standard for Trust",
      slug: "ai-chatbots-transforming-customer-service-2026",
      excerpt:
        "Customers now live outside the 9‑to‑5 world. They expect instant, relevant answers at any hour. Conversational AI turns support into an always‑on revenue engine.",
      category: "AI & Automation",
      tags: ["AI Chatbots", "Customer Service", "Automation"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      publishedAt: "2026-01-27",
      readTime: 9,
      featured: false,
      content: `
## AI Chatbots: Transforming Customer Service into an Always‑On Revenue Engine

Intelligent chatbots greet visitors instantly, understand intent, and provide tailored answers. They qualify leads, book meetings, and resolve issues while your human team sleeps.

NxTech Nova designs “Human‑AI Hybrid” chat experiences where bots handle routine queries and seamlessly hand off complex cases to specialists—so speed never sacrifices empathy.
      `,
    },
    {
      title:
        "Building for the Billion: Why Your Startup’s Tech Stack Is a Growth Engine",
      slug: "scaling-your-startup-technology-stack-essentials-2026",
      excerpt:
        "In 2026, the goal isn’t just to launch—it’s to architect a resilient ecosystem that can handle ten users today and ten million tomorrow without a rewrite.",
      category: "Technology",
      tags: ["Startup", "Tech Stack", "Scaling", "Cloud"],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      publishedAt: "2026-01-30",
      readTime: 11,
      featured: false,
      content: `
## Scaling Your Startup: Technology Stack Essentials for Long‑Term Dominance

Your tech stack is either the wind in your sails or the anchor dragging you down.

The smartest founders choose stacks that are lean enough to iterate quickly but strong enough to support serious automation and analytics later.

NxTech Nova helps startups align architecture, analytics, and go‑to‑market so technology becomes a multiplier for every marketing dollar you spend.
      `,
    },
  ];

  for (const post of blogPosts) {
    const categoryId = categoryMap.get(post.category);
    if (!categoryId) {
      console.error(`❌ Category not found: ${post.category}`);
      continue;
    }

    const existing = await prisma.blog.findUnique({
      where: { slug: post.slug },
    });

    if (!existing) {
      await prisma.blog.create({
        data: {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content.trim(),
          image:
            post.image ??
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
          categoryId,
          authorName: siteName,
          authorAvatar: "",
          authorRole: "Company",
          tags: post.tags,
          publishedAt: new Date(post.publishedAt),
          readTime: post.readTime,
          featured: post.featured,
          isPublished: true,
        },
      });
      console.log(`✅ Created blog: ${post.title}`);
    } else {
      console.log(`ℹ️  Blog already exists: ${post.title}`);
    }
  }

  console.log("✨ NxTech Nova blog seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding NxTech Nova blogs:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

