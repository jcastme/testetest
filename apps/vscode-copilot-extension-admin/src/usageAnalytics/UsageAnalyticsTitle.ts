import { UsageAnalytics as TUsageAnalytics } from "../api/usageAnalytics/UsageAnalytics";

export const USAGEANALYTICS_TITLE_FIELD = "id";

export const UsageAnalyticsTitle = (record: TUsageAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
