import { Module } from "@nestjs/common";
import { ProjectConfigurationModuleBase } from "./base/projectConfiguration.module.base";
import { ProjectConfigurationService } from "./projectConfiguration.service";
import { ProjectConfigurationController } from "./projectConfiguration.controller";
import { ProjectConfigurationResolver } from "./projectConfiguration.resolver";

@Module({
  imports: [ProjectConfigurationModuleBase],
  controllers: [ProjectConfigurationController],
  providers: [ProjectConfigurationService, ProjectConfigurationResolver],
  exports: [ProjectConfigurationService],
})
export class ProjectConfigurationModule {}
