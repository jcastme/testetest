import { ProjectConfigurationWhereInput } from "./ProjectConfigurationWhereInput";
import { ProjectConfigurationOrderByInput } from "./ProjectConfigurationOrderByInput";

export type ProjectConfigurationFindManyArgs = {
  where?: ProjectConfigurationWhereInput;
  orderBy?: Array<ProjectConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
