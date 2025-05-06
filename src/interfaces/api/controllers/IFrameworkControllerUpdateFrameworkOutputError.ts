export interface IFrameworkControllerUpdateFrameworkOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
