export interface IFrameworkControllerReadFrameworkOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
