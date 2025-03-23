import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsageAnalyticsServiceBase } from "./base/usageAnalytics.service.base";

@Injectable()
export class UsageAnalyticsService extends UsageAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
