import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomTemplateService } from "./customTemplate.service";
import { CustomTemplateControllerBase } from "./base/customTemplate.controller.base";

@swagger.ApiTags("customTemplates")
@common.Controller("customTemplates")
export class CustomTemplateController extends CustomTemplateControllerBase {
  constructor(protected readonly service: CustomTemplateService) {
    super(service);
  }
}
