-- CreateEnum
CREATE TYPE "JobApplicationStatus" AS ENUM ('NEW', 'SHORTLISTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "location" TEXT,
    "type" TEXT,
    "description" TEXT NOT NULL,
    "requirements" JSONB,
    "benefits" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "displayOrder" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roleApplyingFor" TEXT NOT NULL,
    "yearsOfExperience" TEXT NOT NULL,
    "coreSkills" TEXT[],
    "resumeUrl" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "portfolioUrl" TEXT,
    "status" "JobApplicationStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
