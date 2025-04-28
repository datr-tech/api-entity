import { IEndpointTypeControllerCreateEndpointTypeInput } from './IEndpointTypeControllerCreateEndpointTypeInput';
import { IEndpointTypeControllerCreateEndpointTypeOutput } from './IEndpointTypeControllerCreateEndpointTypeOutput';

export interface IEndpointTypeControllerCreateEndpointType {
  (
    args: IEndpointTypeControllerCreateEndpointTypeInput,
  ): Promise<IEndpointTypeControllerCreateEndpointTypeOutput>;
}
