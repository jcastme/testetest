import { CustomTemplateWhereInput } from "./CustomTemplateWhereInput";
import { CustomTemplateOrderByInput } from "./CustomTemplateOrderByInput";

export type CustomTemplateFindManyArgs = {
  where?: CustomTemplateWhereInput;
  orderBy?: Array<CustomTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
