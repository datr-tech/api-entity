import { IServiceControllerCreateServiceInput } from './IServiceControllerCreateServiceInput';
import { IServiceControllerCreateServiceOutput } from './IServiceControllerCreateServiceOutput';

export interface IServiceControllerCreateService {
  (
    args: IServiceControllerCreateServiceInput,
  ): Promise<IServiceControllerCreateServiceOutput>;
}
