import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsageAnalyticsService } from "./usageAnalytics.service";
import { UsageAnalyticsGrpcControllerBase } from "./base/usageAnalytics.grpc.controller.base";

@swagger.ApiTags("usageAnalytics")
@common.Controller("usageAnalytics")
export class UsageAnalyticsGrpcController extends UsageAnalyticsGrpcControllerBase {
  constructor(protected readonly service: UsageAnalyticsService) {
    super(service);
  }
}
