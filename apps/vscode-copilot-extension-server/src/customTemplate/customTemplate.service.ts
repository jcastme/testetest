import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomTemplateServiceBase } from "./base/customTemplate.service.base";

@Injectable()
export class CustomTemplateService extends CustomTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
