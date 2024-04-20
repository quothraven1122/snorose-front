import { commonEnv } from "./environment.common";
import { EnvironmentName } from "./environmnet.enum";

const env: Partial<typeof commonEnv> = {
  environmentName: EnvironmentName.Sample
  /**
   * ex)
   * base_url: 'http://localhost:8080'
   */
}

export const environment = { ...commonEnv, ...env }