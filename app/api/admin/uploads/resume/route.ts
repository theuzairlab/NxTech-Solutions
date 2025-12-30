import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { imagekit } from "@/lib/imagekit";

export async function POST(req: Request) {
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file");
  const fileName = (formData.get("fileName") as string) || "resume";

  if (!(file instanceof Blob)) {
    return new NextResponse("Missing file", { status: 400 });
  }

  // Validate file type (PDF or DOC/DOCX)
  const fileType = file.type;
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  
  if (!allowedTypes.includes(fileType)) {
    return new NextResponse("Invalid file type. Only PDF and DOC/DOCX files are allowed.", { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const uploaded = await imagekit.upload({
      file: buffer,
      fileName: `${fileName}-${Date.now()}`,
      folder: `${process.env.NEXT_PUBLIC_SITE_NAME}/resumes`,
    });

    return NextResponse.json({
      url: uploaded.url,
      fileId: uploaded.fileId,
    });
  } catch (err) {
    console.error("ImageKit upload error", err);
    return new NextResponse("Upload failed", { status: 500 });
  }
}

