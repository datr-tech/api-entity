import { IResourceTypeControllerReadResourceTypeInput } from './IResourceTypeControllerReadResourceTypeInput';
import { IResourceTypeControllerReadResourceTypeOutput } from './IResourceTypeControllerReadResourceTypeOutput';

export interface IResourceTypeControllerReadResourceType {
  (
    args: IResourceTypeControllerReadResourceTypeInput,
  ): Promise<IResourceTypeControllerReadResourceTypeOutput>;
}
