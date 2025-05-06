export interface IFrameworkControllerCreateFrameworkOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
