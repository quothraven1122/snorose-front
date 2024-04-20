import { commonEnv } from "./environment.common";
import { EnvironmentName } from "./environmnet.enum";

//기본이 되는 환경파일. 변경 불가. environment 변경 시 environment.sample.ts 참고 필요.
const env: Partial<typeof commonEnv> = {
  environmentName: EnvironmentName.Development
};

export const environment = { ...commonEnv, ...env }
