import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["customtemplate", "usageanalytics", "projectconfiguration", "user"],
    protoPath: [
      "src/customtemplate/customtemplate.proto",
      "src/usageanalytics/usageanalytics.proto",
      "src/projectconfiguration/projectconfiguration.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
