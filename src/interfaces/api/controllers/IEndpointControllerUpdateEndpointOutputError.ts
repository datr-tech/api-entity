export interface IEndpointControllerUpdateEndpointOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
