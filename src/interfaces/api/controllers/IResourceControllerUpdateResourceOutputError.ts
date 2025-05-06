export interface IResourceControllerUpdateResourceOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
