import { CustomTemplate as TCustomTemplate } from "../api/customTemplate/CustomTemplate";

export const CUSTOMTEMPLATE_TITLE_FIELD = "id";

export const CustomTemplateTitle = (record: TCustomTemplate): string => {
  return record.id?.toString() || String(record.id);
};
