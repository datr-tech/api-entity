export interface IFrameworkControllerDeleteFrameworkOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
