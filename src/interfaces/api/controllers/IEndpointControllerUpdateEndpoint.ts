import { IEndpointControllerUpdateEndpointInput } from './IEndpointControllerUpdateEndpointInput';
import { IEndpointControllerUpdateEndpointOutput } from './IEndpointControllerUpdateEndpointOutput';

export interface IEndpointControllerUpdateEndpoint {
  (
    args: IEndpointControllerUpdateEndpointInput,
  ): Promise<IEndpointControllerUpdateEndpointOutput>;
}
