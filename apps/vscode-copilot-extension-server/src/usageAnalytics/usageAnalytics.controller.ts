import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsageAnalyticsService } from "./usageAnalytics.service";
import { UsageAnalyticsControllerBase } from "./base/usageAnalytics.controller.base";

@swagger.ApiTags("usageAnalytics")
@common.Controller("usageAnalytics")
export class UsageAnalyticsController extends UsageAnalyticsControllerBase {
  constructor(protected readonly service: UsageAnalyticsService) {
    super(service);
  }
}
