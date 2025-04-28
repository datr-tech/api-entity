import { IServiceControllerReadServiceInput } from './IServiceControllerReadServiceInput';
import { IServiceControllerReadServiceOutput } from './IServiceControllerReadServiceOutput';

export interface IServiceControllerReadService {
  (
    args: IServiceControllerReadServiceInput,
  ): Promise<IServiceControllerReadServiceOutput>;
}
