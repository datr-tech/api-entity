import { IEndpointControllerDeleteEndpointInput } from './IEndpointControllerDeleteEndpointInput';
import { IEndpointControllerDeleteEndpointOutput } from './IEndpointControllerDeleteEndpointOutput';

export interface IEndpointControllerDeleteEndpoint {
  (
    args: IEndpointControllerDeleteEndpointInput,
  ): Promise<IEndpointControllerDeleteEndpointOutput>;
}
