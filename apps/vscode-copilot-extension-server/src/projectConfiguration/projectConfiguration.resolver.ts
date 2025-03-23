import * as graphql from "@nestjs/graphql";
import { ProjectConfigurationResolverBase } from "./base/projectConfiguration.resolver.base";
import { ProjectConfiguration } from "./base/ProjectConfiguration";
import { ProjectConfigurationService } from "./projectConfiguration.service";

@graphql.Resolver(() => ProjectConfiguration)
export class ProjectConfigurationResolver extends ProjectConfigurationResolverBase {
  constructor(protected readonly service: ProjectConfigurationService) {
    super(service);
  }
}
