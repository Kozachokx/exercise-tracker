enum ErrorCode {
  Default = 1000,
  BadParameters = 1001,

  UserNotFound = 1010,

  ExerciseNotFound = 1020,
  ExerciseDeleteForbiden = 1021,

  RouteNotFound = 4000,
  EndpointBadRequest = 4001,
  MiddlewareError = 4002,
  ValidationError = 4003,
}

export { ErrorCode };
