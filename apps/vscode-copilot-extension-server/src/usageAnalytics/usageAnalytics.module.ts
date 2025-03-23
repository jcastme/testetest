import { Module } from "@nestjs/common";
import { UsageAnalyticsModuleBase } from "./base/usageAnalytics.module.base";
import { UsageAnalyticsService } from "./usageAnalytics.service";
import { UsageAnalyticsController } from "./usageAnalytics.controller";
import { UsageAnalyticsResolver } from "./usageAnalytics.resolver";

@Module({
  imports: [UsageAnalyticsModuleBase],
  controllers: [UsageAnalyticsController],
  providers: [UsageAnalyticsService, UsageAnalyticsResolver],
  exports: [UsageAnalyticsService],
})
export class UsageAnalyticsModule {}
