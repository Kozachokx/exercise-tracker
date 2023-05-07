enum ErrorMessage {
  SomethingWentWrong = 'Something went wrong.',

  RouteNotFound = 'Route not found',

  NotValidDataInQuery = 'Incorrect data were provided in the request query parameters.',
  NotValidDataInParams = 'Incorrect data were provided in the request parameters.',
  NotValidDataInBody = 'Incorrect data were provided in the request body.',

  RequestQueryEmpty = 'The request query params object is empty.',
  RequestParamsEmpty = 'The request params is empty.',
  RequestBodyEmpty = 'The request body object is empty.',

  UserNotFound = 'User not found',

  ExerciseDeleteForbiden = 'You are not allowed to delete others exercises!',
  ExerciseNotFound = 'Exercise not found',
}

export { ErrorMessage };
