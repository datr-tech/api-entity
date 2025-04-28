import { IEndpointControllerCreateEndpointInput } from './IEndpointControllerCreateEndpointInput';
import { IEndpointControllerCreateEndpointOutput } from './IEndpointControllerCreateEndpointOutput';

export interface IEndpointControllerCreateEndpoint {
  (
    args: IEndpointControllerCreateEndpointInput,
  ): Promise<IEndpointControllerCreateEndpointOutput>;
}
