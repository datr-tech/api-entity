export interface IEndpointControllerDeleteEndpointOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
