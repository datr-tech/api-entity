import { IEndpointTypeControllerDeleteEndpointTypeInput } from './IEndpointTypeControllerDeleteEndpointTypeInput';
import { IEndpointTypeControllerDeleteEndpointTypeOutput } from './IEndpointTypeControllerDeleteEndpointTypeOutput';

export interface IEndpointTypeControllerDeleteEndpointType {
  (
    args: IEndpointTypeControllerDeleteEndpointTypeInput,
  ): Promise<IEndpointTypeControllerDeleteEndpointTypeOutput>;
}
