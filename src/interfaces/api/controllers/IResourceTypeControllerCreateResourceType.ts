import { IResourceTypeControllerCreateResourceTypeInput } from './IResourceTypeControllerCreateResourceTypeInput';
import { IResourceTypeControllerCreateResourceTypeOutput } from './IResourceTypeControllerCreateResourceTypeOutput';

export interface IResourceTypeControllerCreateResourceType {
  (
    args: IResourceTypeControllerCreateResourceTypeInput,
  ): Promise<IResourceTypeControllerCreateResourceTypeOutput>;
}
