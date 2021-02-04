export enum HTTPStatusCodeEnum {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  TOO_MANY_REQUESTS = 429,
  SUCCESS = 200,
  SUCCESS_NO_CONTENT = 204,
  INTERNAL_ERROR = 500,
}

export type HTTPStatusType = keyof typeof HTTPStatusCodeEnum;
