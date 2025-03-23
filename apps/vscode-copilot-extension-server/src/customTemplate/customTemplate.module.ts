import { Module } from "@nestjs/common";
import { CustomTemplateModuleBase } from "./base/customTemplate.module.base";
import { CustomTemplateService } from "./customTemplate.service";
import { CustomTemplateController } from "./customTemplate.controller";
import { CustomTemplateResolver } from "./customTemplate.resolver";

@Module({
  imports: [CustomTemplateModuleBase],
  controllers: [CustomTemplateController],
  providers: [CustomTemplateService, CustomTemplateResolver],
  exports: [CustomTemplateService],
})
export class CustomTemplateModule {}
