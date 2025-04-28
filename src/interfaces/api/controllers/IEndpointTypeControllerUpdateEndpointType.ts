import { IEndpointTypeControllerUpdateEndpointTypeInput } from './IEndpointTypeControllerUpdateEndpointTypeInput';
import { IEndpointTypeControllerUpdateEndpointTypeOutput } from './IEndpointTypeControllerUpdateEndpointTypeOutput';

export interface IEndpointTypeControllerUpdateEndpointType {
  (
    args: IEndpointTypeControllerUpdateEndpointTypeInput,
  ): Promise<IEndpointTypeControllerUpdateEndpointTypeOutput>;
}
