import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectConfigurationService } from "./projectConfiguration.service";
import { ProjectConfigurationGrpcControllerBase } from "./base/projectConfiguration.grpc.controller.base";

@swagger.ApiTags("projectConfigurations")
@common.Controller("projectConfigurations")
export class ProjectConfigurationGrpcController extends ProjectConfigurationGrpcControllerBase {
  constructor(protected readonly service: ProjectConfigurationService) {
    super(service);
  }
}
