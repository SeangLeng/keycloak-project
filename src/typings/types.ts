export interface BaseRequestDto {
  requestTime: string;
  request: { [key: string]: any };
}