import { IResourceTypeControllerUpdateResourceTypeInput } from './IResourceTypeControllerUpdateResourceTypeInput';
import { IResourceTypeControllerUpdateResourceTypeOutput } from './IResourceTypeControllerUpdateResourceTypeOutput';

export interface IResourceTypeControllerUpdateResourceType {
  (
    args: IResourceTypeControllerUpdateResourceTypeInput,
  ): Promise<IResourceTypeControllerUpdateResourceTypeOutput>;
}
