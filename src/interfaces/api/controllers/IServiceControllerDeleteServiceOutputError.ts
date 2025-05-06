export interface IServiceControllerDeleteServiceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
