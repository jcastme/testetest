/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UsageAnalytics as PrismaUsageAnalytics } from "@prisma/client";

export class UsageAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UsageAnalyticsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.usageAnalytics.count(args);
  }

  async usageAnalyticsItems(
    args: Prisma.UsageAnalyticsFindManyArgs
  ): Promise<PrismaUsageAnalytics[]> {
    return this.prisma.usageAnalytics.findMany(args);
  }
  async usageAnalytics(
    args: Prisma.UsageAnalyticsFindUniqueArgs
  ): Promise<PrismaUsageAnalytics | null> {
    return this.prisma.usageAnalytics.findUnique(args);
  }
  async createUsageAnalytics(
    args: Prisma.UsageAnalyticsCreateArgs
  ): Promise<PrismaUsageAnalytics> {
    return this.prisma.usageAnalytics.create(args);
  }
  async updateUsageAnalytics(
    args: Prisma.UsageAnalyticsUpdateArgs
  ): Promise<PrismaUsageAnalytics> {
    return this.prisma.usageAnalytics.update(args);
  }
  async deleteUsageAnalytics(
    args: Prisma.UsageAnalyticsDeleteArgs
  ): Promise<PrismaUsageAnalytics> {
    return this.prisma.usageAnalytics.delete(args);
  }
}
