import { IEndpointControllerReadEndpointInput } from './IEndpointControllerReadEndpointInput';
import { IEndpointControllerReadEndpointOutput } from './IEndpointControllerReadEndpointOutput';

export interface IEndpointControllerReadEndpoint {
  (
    args: IEndpointControllerReadEndpointInput,
  ): Promise<IEndpointControllerReadEndpointOutput>;
}
