import { IEndpointTypeControllerReadEndpointTypeInput } from './IEndpointTypeControllerReadEndpointTypeInput';
import { IEndpointTypeControllerReadEndpointTypeOutput } from './IEndpointTypeControllerReadEndpointTypeOutput';

export interface IEndpointTypeControllerReadEndpointType {
  (
    args: IEndpointTypeControllerReadEndpointTypeInput,
  ): Promise<IEndpointTypeControllerReadEndpointTypeOutput>;
}
