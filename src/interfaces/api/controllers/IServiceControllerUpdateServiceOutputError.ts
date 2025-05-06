export interface IServiceControllerUpdateServiceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
