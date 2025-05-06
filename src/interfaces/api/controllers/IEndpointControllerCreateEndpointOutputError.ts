export interface IEndpointControllerCreateEndpointOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
