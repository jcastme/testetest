import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectConfigurationServiceBase } from "./base/projectConfiguration.service.base";

@Injectable()
export class ProjectConfigurationService extends ProjectConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
