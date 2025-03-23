import { ProjectConfiguration as TProjectConfiguration } from "../api/projectConfiguration/ProjectConfiguration";

export const PROJECTCONFIGURATION_TITLE_FIELD = "id";

export const ProjectConfigurationTitle = (
  record: TProjectConfiguration
): string => {
  return record.id?.toString() || String(record.id);
};
