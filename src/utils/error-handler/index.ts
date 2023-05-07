import { ErrorCode } from './codes';
import { ErrorMessage } from './messages';
import { ErrorStatus } from './status';

interface AppErrorParams {
  data: string;
  stack: any;
  target: any;
  status: number;
  code: number;
  message: string;
}

class AppError extends Error {
  public data: string;
  public stack: any;
  public target: any;
  public code: number;
  public status: number;
  public message: string;
  public isCustom: boolean;
  public stackStr: string;

  constructor(opts: AppErrorParams | string | any) {
    super(typeof opts === 'string' ? opts : opts.message);

    let data;
    let stack;
    let target;
    let code;
    let status;
    let message;

    if (typeof opts === 'string') {
      message = opts;
    } else if (typeof opts === 'object') {
      ({
        data,
        stack,
        target,
        status = ErrorStatus.InternalServerError,
        code = ErrorCode.Default,
        message = ErrorMessage.SomethingWentWrong,
      } = opts);
    }

    this.code = code || AppError.ErrorCode.Default;
    this.isCustom = true;
    this.status = status || AppError.ErrorStatus.InternalServerError;
    this.target = target;
    this.message = message || AppError.ErrorMessage.SomethingWentWrong;
    this.data = JSON.stringify(data);

    if (stack) {
      this.stack = stack;
      this.stackStr = stack;
    } else {
      Error.captureStackTrace(this);
      this.stackStr = this.stack;
    }
  }

  static get ErrorCode() {
    return ErrorCode;
  }

  static get ErrorMessage() {
    return ErrorMessage;
  }

  static get ErrorStatus() {
    return ErrorStatus;
  }
}

export { AppError, ErrorCode, ErrorMessage, ErrorStatus };
