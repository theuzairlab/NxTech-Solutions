import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      jobId,
      fullName,
      email,
      roleApplyingFor,
      yearsOfExperience,
      coreSkills,
      resumeUrl,
      linkedinUrl,
      portfolioUrl,
    } = body as {
      jobId?: string;
      fullName?: string;
      email?: string;
      roleApplyingFor?: string;
      yearsOfExperience?: string;
      coreSkills?: string[];
      resumeUrl?: string;
      linkedinUrl?: string;
      portfolioUrl?: string;
    };

    if (!fullName || !email || !roleApplyingFor || !yearsOfExperience || !coreSkills || !resumeUrl) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (!jobId) {
      return new NextResponse("Job ID is required", { status: 400 });
    }

    // Verify job exists and is active
    const job = await prisma.job.findUnique({
      where: { id: jobId },
    });

    if (!job || !job.isActive) {
      return new NextResponse("Job not found or not available", { status: 404 });
    }

    const created = await prisma.jobApplication.create({
      data: {
        jobId,
        fullName,
        email,
        roleApplyingFor,
        yearsOfExperience,
        coreSkills,
        resumeUrl,
        linkedinUrl: linkedinUrl || null,
        portfolioUrl: portfolioUrl || null,
      },
      include: {
        job: {
          select: {
            title: true,
            department: true,
          },
        },
      },
    });

    // Send email notification
    try {
      await sendApplicationEmail(created);
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ id: created.id }, { status: 201 });
  } catch (error) {
    console.error("[JOB_APPLICATION_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

async function sendApplicationEmail(application: any) {
  const hrEmail = process.env.HR_EMAIL || process.env.NEXT_PUBLIC_USER_EMAIL || "";
  
  if (!hrEmail) {
    console.warn("No HR email configured, skipping email notification");
    return;
  }

  // For now, we'll use a simple approach
  // In production, you'd use a service like Resend, SendGrid, or Nodemailer
  const emailBody = `
New Job Application Received

Job: ${application.job.title} (${application.job.department})
Candidate: ${application.fullName}
Email: ${application.email}
Role Applying For: ${application.roleApplyingFor}
Years of Experience: ${application.yearsOfExperience}
Core Skills: ${application.coreSkills.join(", ")}

${application.linkedinUrl ? `LinkedIn: ${application.linkedinUrl}` : ""}
${application.portfolioUrl ? `Portfolio: ${application.portfolioUrl}` : ""}

Resume: ${application.resumeUrl}

View in admin panel: ${process.env.NEXT_PUBLIC_SITE_URL || ""}/dashboard/applications
  `.trim();

  // TODO: Implement actual email sending
  // Example with fetch API (if using a service like Resend):
  // await fetch('https://api.resend.com/emails', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     from: 'noreply@yourdomain.com',
  //     to: hrEmail,
  //     subject: `New Application: ${application.fullName} - ${application.job.title}`,
  //     text: emailBody,
  //   }),
  // });

  console.log("Application email notification:", {
    to: hrEmail,
    subject: `New Application: ${application.fullName} - ${application.job.title}`,
    body: emailBody,
  });
}

