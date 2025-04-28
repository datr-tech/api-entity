import { IResourceControllerReadResourceInput } from './IResourceControllerReadResourceInput';
import { IResourceControllerReadResourceOutput } from './IResourceControllerReadResourceOutput';

export interface IResourceControllerReadResource {
  (
    args: IResourceControllerReadResourceInput,
  ): Promise<IResourceControllerReadResourceOutput>;
}
