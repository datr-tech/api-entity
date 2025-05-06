export interface IResourceTypeControllerReadResourceTypeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
