import { IServiceControllerUpdateServiceInput } from './IServiceControllerUpdateServiceInput';
import { IServiceControllerUpdateServiceOutput } from './IServiceControllerUpdateServiceOutput';

export interface IServiceControllerUpdateService {
  (
    args: IServiceControllerUpdateServiceInput,
  ): Promise<IServiceControllerUpdateServiceOutput>;
}
