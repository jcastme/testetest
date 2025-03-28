import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomTemplateService } from "./customTemplate.service";
import { CustomTemplateGrpcControllerBase } from "./base/customTemplate.grpc.controller.base";

@swagger.ApiTags("customTemplates")
@common.Controller("customTemplates")
export class CustomTemplateGrpcController extends CustomTemplateGrpcControllerBase {
  constructor(protected readonly service: CustomTemplateService) {
    super(service);
  }
}
