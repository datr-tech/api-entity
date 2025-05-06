export interface IResourceControllerDeleteResourceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
