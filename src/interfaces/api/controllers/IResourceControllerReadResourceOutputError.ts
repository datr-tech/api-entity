export interface IResourceControllerReadResourceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
