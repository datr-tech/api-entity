export interface IResourceControllerCreateResourceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
