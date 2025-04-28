import { IResourceControllerCreateResourceInput } from './IResourceControllerCreateResourceInput';
import { IResourceControllerCreateResourceOutput } from './IResourceControllerCreateResourceOutput';

export interface IResourceControllerCreateResource {
  (
    args: IResourceControllerCreateResourceInput,
  ): Promise<IResourceControllerCreateResourceOutput>;
}
