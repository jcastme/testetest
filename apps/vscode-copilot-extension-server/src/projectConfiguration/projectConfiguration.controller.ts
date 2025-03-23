import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectConfigurationService } from "./projectConfiguration.service";
import { ProjectConfigurationControllerBase } from "./base/projectConfiguration.controller.base";

@swagger.ApiTags("projectConfigurations")
@common.Controller("projectConfigurations")
export class ProjectConfigurationController extends ProjectConfigurationControllerBase {
  constructor(protected readonly service: ProjectConfigurationService) {
    super(service);
  }
}
