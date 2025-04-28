import { IResourceTypeControllerDeleteResourceTypeInput } from './IResourceTypeControllerDeleteResourceTypeInput';
import { IResourceTypeControllerDeleteResourceTypeOutput } from './IResourceTypeControllerDeleteResourceTypeOutput';

export interface IResourceTypeControllerDeleteResourceType {
  (
    args: IResourceTypeControllerDeleteResourceTypeInput,
  ): Promise<IResourceTypeControllerDeleteResourceTypeOutput>;
}
