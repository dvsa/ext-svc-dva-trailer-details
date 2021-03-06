export enum ERRORS {
    LambdaInvokeConfigNotDefined = "Lambda Invoke config is not defined in the config file.",
    EventIsEmpty = "Event is empty",
    NoBranch = "Please define BRANCH environment variable",
    NoResourceMatch = "No resources match the search criteria"
}

export enum HTTPRESPONSE {
    AWS_EVENT_EMPTY = "AWS event is empty. Check your test event.",
    NOT_VALID_JSON = "Body is not a valid JSON.",
}

export enum HTTPMethods {
    GET = "GET",
      POST = "POST",
      PUT = "PUT",
      DELETE = "DELETE"
}

export enum MESSAGES {
    INVALID_JSON = "Body is not a valid JSON.",
    INTERNAL_SERVER_ERROR = "Internal Server Error",
    RECORD_CREATED = "Test records created",
    BAD_REQUEST = "Bad request"
  }

