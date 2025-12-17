import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const CALENDLY_LINK = "https://calendly.com/uzairullah397/new-meeting";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type ChatbotRequest = {
  messages: ChatMessage[];
  context?: {
    pagePath?: string;
    referrer?: string;
    serviceSlug?: string;
  };
};

async function getCompanyContext() {
  const [services, industries] = await Promise.all([
    prisma.service.findMany({
      where: { isActive: true },
      select: {
        slug: true,
        title: true,
        shortDescription: true,
      },
      orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    }),
    prisma.industry.findMany({
      where: { isActive: true },
      select: {
        name: true,
        description: true,
      },
      orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    }),
  ]);

  const servicesList = services
    .map((s) => `- ${s.title} (slug: ${s.slug}): ${s.shortDescription}`)
    .join("\n");

  const industriesList = industries
    .map((i) => `- ${i.name}: ${i.description || "Tailored solutions"}`)
    .join("\n");

  return {
    servicesList,
    industriesList,
    serviceSlugs: services.map((s) => s.slug),
  };
}

function buildSystemPrompt(context: Awaited<ReturnType<typeof getCompanyContext>>): string {
  return `You are a helpful AI assistant for NxTech Solutions, a digital transformation company.

COMPANY INFORMATION:
NxTech Solutions provides comprehensive digital services to help businesses grow and scale.

OUR SERVICES:
${context.servicesList}

INDUSTRIES WE SERVE:
${context.industriesList}

CALENDLY MEETING LINK:
${CALENDLY_LINK}

YOUR RESPONSIBILITIES:
1. Answer FAQs about our services, industries, and company clearly and concisely.
2. When users express interest in working with us, politely collect their information:
   - Name
   - Email
   - Phone (optional)
   - Company (optional)
   - Budget range (optional)
   - Their project needs/message
   
   When you have collected this information, respond with a JSON action in this format:
   {"action": "create_lead", "lead": {"name": "...", "email": "...", "phone": "...", "company": "...", "budget": "...", "message": "..."}}
   
   Then provide a friendly confirmation message.

3. For booking meetings, when user wants to schedule a meeting or you suggest booking one, include a JSON action:
   {"action": "book_meeting"}
   Then provide a friendly message like "You can also book a meeting with us!" but DO NOT include the raw Calendly URL in your response text.

4. Recommend relevant services based on user needs. When recommending services, include a JSON action:
   {"action": "recommend_services", "services": ["service-slug-1", "service-slug-2"]}
   
   Available service slugs: ${context.serviceSlugs.join(", ")}

5. Be friendly, professional, and helpful. Keep responses concise (2-3 sentences max unless detailed explanation is needed).

IMPORTANT:
- Always respond naturally in conversation, but include JSON actions when needed.
- The JSON actions should be embedded naturally in your response or at the end.
- If user asks about pricing, mention that pricing varies by project and suggest booking a meeting or getting a quote.
- If user wants to work with us, collect their information and use the create_lead action.`;
}

async function callOpenRouter(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error("OpenRouter API key not configured. Please set OPENROUTER_API_KEY or OPENAI_API_KEY environment variable.");
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://nxtech-solutions.com",
      "X-Title": "NxTech Solutions Chatbot",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini", // Using GPT-4o-mini via OpenRouter (cost-effective)
      messages,
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
}

function extractActions(responseText: string): {
  replyText: string;
  actions?: {
    createLead?: {
      name?: string;
      email?: string;
      phone?: string;
      company?: string;
      budget?: string;
      message?: string;
    };
    recommendServices?: string[];
    bookMeeting?: boolean;
  };
} {
  const actions: any = {};
  let cleanedText = responseText;

  // Function to find and extract JSON objects (handles nested objects)
  function findJsonObjects(text: string): string[] {
    const results: string[] = [];
    let depth = 0;
    let start = -1;
    
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '{') {
        if (depth === 0) start = i;
        depth++;
      } else if (text[i] === '}') {
        depth--;
        if (depth === 0 && start !== -1) {
          const jsonStr = text.substring(start, i + 1);
          // Only include if it contains "action" key
          if (jsonStr.includes('"action"')) {
            results.push(jsonStr);
          }
        }
      }
    }
    
    return results;
  }

  // Extract all JSON objects from the response
  const jsonMatches = findJsonObjects(responseText);

  for (const jsonStr of jsonMatches) {
    try {
      const parsed = JSON.parse(jsonStr);
      
      if (parsed.action === "create_lead" && parsed.lead) {
        actions.createLead = {
          name: parsed.lead.name || "",
          email: parsed.lead.email || "",
          phone: parsed.lead.phone || "",
          company: parsed.lead.company || "",
          budget: parsed.lead.budget || "",
          message: parsed.lead.message || "",
        };
        // Remove this JSON from response text (escape special regex chars)
        cleanedText = cleanedText.replace(jsonStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "").trim();
      } else if (parsed.action === "recommend_services" && Array.isArray(parsed.services)) {
        actions.recommendServices = parsed.services;
        // Remove this JSON from response text
        cleanedText = cleanedText.replace(jsonStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "").trim();
      } else if (parsed.action === "book_meeting") {
        actions.bookMeeting = true;
        // Remove this JSON from response text
        cleanedText = cleanedText.replace(jsonStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "").trim();
      }
    } catch (e) {
      // If JSON parsing fails for this specific match, continue with others
      console.error("Failed to parse action JSON:", jsonStr.substring(0, 100), e);
    }
  }

  // Also check if Calendly URL is mentioned and remove it, set bookMeeting action
  if (responseText.includes(CALENDLY_LINK) || responseText.toLowerCase().includes("calendly")) {
    actions.bookMeeting = true;
    cleanedText = cleanedText.replace(CALENDLY_LINK, "").replace(/https?:\/\/[^\s]+/g, "").trim();
    // Clean up any leftover "here:" or similar text
    cleanedText = cleanedText.replace(/\s*here:\s*/gi, "").trim();
  }

  // Clean up extra whitespace, empty lines, and orphaned punctuation
  cleanedText = cleanedText
    .replace(/\n\s*\n/g, "\n")
    .replace(/^\s*[.,;:]\s*/gm, "") // Remove leading punctuation on lines
    .replace(/\s+([.,;:])/g, "$1") // Fix spacing before punctuation
    .trim();

  return {
    replyText: cleanedText || responseText,
    actions: Object.keys(actions).length > 0 ? actions : undefined,
  };
}

export async function POST(req: Request) {
  try {
    const body: ChatbotRequest = await req.json();
    const { messages, context } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Get company context (services, industries)
    const companyContext = await getCompanyContext();

    // Build system prompt with company info
    const systemPrompt = buildSystemPrompt(companyContext);

    // Prepare messages for OpenRouter (include system prompt)
    const openRouterMessages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-10), // Keep last 10 messages for context (to avoid token limits)
    ];

    // Call OpenRouter API
    const aiResponse = await callOpenRouter(openRouterMessages);

    // Extract actions (lead creation, service recommendations)
    const { replyText, actions } = extractActions(aiResponse);

    // If create_lead action exists, save to database
    if (actions?.createLead) {
      try {
        await prisma.chatLead.create({
          data: {
            name: actions.createLead.name || null,
            email: actions.createLead.email || null,
            phone: actions.createLead.phone || null,
            company: actions.createLead.company || null,
            budget: actions.createLead.budget || null,
            message: actions.createLead.message || null,
            sourcePage: context?.pagePath || null,
          },
        });
      } catch (dbError) {
        console.error("Failed to save chat lead:", dbError);
        // Don't fail the request if DB save fails, just log it
      }
    }

    // Return response with actions
    return NextResponse.json({
      replyText,
      recommendedServices: actions?.recommendServices || undefined,
      leadCreated: !!actions?.createLead,
      showBookMeeting: !!actions?.bookMeeting,
    });
  } catch (error: any) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat message",
        message: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

