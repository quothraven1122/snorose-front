export interface IBaseResponse<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  result: T
}