export interface IEndpointControllerReadEndpointOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
