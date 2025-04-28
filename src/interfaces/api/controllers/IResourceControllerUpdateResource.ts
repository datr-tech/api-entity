import { IResourceControllerUpdateResourceInput } from './IResourceControllerUpdateResourceInput';
import { IResourceControllerUpdateResourceOutput } from './IResourceControllerUpdateResourceOutput';

export interface IResourceControllerUpdateResource {
  (
    args: IResourceControllerUpdateResourceInput,
  ): Promise<IResourceControllerUpdateResourceOutput>;
}
