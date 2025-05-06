export interface IServiceControllerReadServiceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
