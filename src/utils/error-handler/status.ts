// Other status: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

import { HttpCodeEnum } from '../../enums';

enum ErrorStatus {
  BadReqeust = HttpCodeEnum.BadRequest,
  Unauthorized = HttpCodeEnum.Unauthorized,
  Forbidden = HttpCodeEnum.Forbidden,
  NotFound = HttpCodeEnum.NotFound,
  MethodNotAllowed = HttpCodeEnum.MethodNotAllowed,
  Conflict = HttpCodeEnum.Conflict,

  InternalServerError = HttpCodeEnum.InternalServerError,
  NotImplemented = HttpCodeEnum.NotImplemented,
}

export { ErrorStatus };
