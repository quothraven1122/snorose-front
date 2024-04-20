import { EnvironmentName } from "./environmnet.enum";

//common에 있는 내용이 기본이고 프로필 별로 덮어쓰고 싶으면 프로필 내부에서 속성을 변경하면 됩니다.
//모든 모드에서 공통이 되는 설정 파일들
export const commonEnv = {
  environmentName: EnvironmentName.Common,
  base_url: 'http://localhost:8080'
}