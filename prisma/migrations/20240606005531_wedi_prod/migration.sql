-- AlterTable
ALTER TABLE "users" ADD COLUMN     "is_active" BOOLEAN,
ADD COLUMN     "is_canceled" BOOLEAN,
ADD COLUMN     "is_subscribed" BOOLEAN;
