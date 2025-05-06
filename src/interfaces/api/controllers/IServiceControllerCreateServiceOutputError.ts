export interface IServiceControllerCreateServiceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
