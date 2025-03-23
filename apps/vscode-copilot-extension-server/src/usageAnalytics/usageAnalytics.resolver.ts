import * as graphql from "@nestjs/graphql";
import { UsageAnalyticsResolverBase } from "./base/usageAnalytics.resolver.base";
import { UsageAnalytics } from "./base/UsageAnalytics";
import { UsageAnalyticsService } from "./usageAnalytics.service";

@graphql.Resolver(() => UsageAnalytics)
export class UsageAnalyticsResolver extends UsageAnalyticsResolverBase {
  constructor(protected readonly service: UsageAnalyticsService) {
    super(service);
  }
}
