import { IServiceControllerDeleteServiceInput } from './IServiceControllerDeleteServiceInput';
import { IServiceControllerDeleteServiceOutput } from './IServiceControllerDeleteServiceOutput';

export interface IServiceControllerDeleteService {
  (
    args: IServiceControllerDeleteServiceInput,
  ): Promise<IServiceControllerDeleteServiceOutput>;
}
