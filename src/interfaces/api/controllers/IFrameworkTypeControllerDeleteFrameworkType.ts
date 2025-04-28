import { IFrameworkTypeControllerDeleteFrameworkTypeInput } from './IFrameworkTypeControllerDeleteFrameworkTypeInput';
import { IFrameworkTypeControllerDeleteFrameworkTypeOutput } from './IFrameworkTypeControllerDeleteFrameworkTypeOutput';

export interface IFrameworkTypeControllerDeleteFrameworkType {
  (
    args: IFrameworkTypeControllerDeleteFrameworkTypeInput,
  ): Promise<IFrameworkTypeControllerDeleteFrameworkTypeOutput>;
}
