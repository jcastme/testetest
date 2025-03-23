import { UsageAnalyticsWhereInput } from "./UsageAnalyticsWhereInput";
import { UsageAnalyticsOrderByInput } from "./UsageAnalyticsOrderByInput";

export type UsageAnalyticsFindManyArgs = {
  where?: UsageAnalyticsWhereInput;
  orderBy?: Array<UsageAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
