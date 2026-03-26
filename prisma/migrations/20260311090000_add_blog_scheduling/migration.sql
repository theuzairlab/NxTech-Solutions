-- Add scheduling support for blog publishing
ALTER TABLE "Blog"
ADD COLUMN "scheduledFor" TIMESTAMP(3);
