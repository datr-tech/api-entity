import { IResourceControllerDeleteResourceInput } from './IResourceControllerDeleteResourceInput';
import { IResourceControllerDeleteResourceOutput } from './IResourceControllerDeleteResourceOutput';

export interface IResourceControllerDeleteResource {
  (
    args: IResourceControllerDeleteResourceInput,
  ): Promise<IResourceControllerDeleteResourceOutput>;
}
