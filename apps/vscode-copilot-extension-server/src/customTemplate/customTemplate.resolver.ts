import * as graphql from "@nestjs/graphql";
import { CustomTemplateResolverBase } from "./base/customTemplate.resolver.base";
import { CustomTemplate } from "./base/CustomTemplate";
import { CustomTemplateService } from "./customTemplate.service";

@graphql.Resolver(() => CustomTemplate)
export class CustomTemplateResolver extends CustomTemplateResolverBase {
  constructor(protected readonly service: CustomTemplateService) {
    super(service);
  }
}
