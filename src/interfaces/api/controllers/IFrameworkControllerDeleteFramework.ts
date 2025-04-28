import { IFrameworkControllerDeleteFrameworkInput } from './IFrameworkControllerDeleteFrameworkInput';
import { IFrameworkControllerDeleteFrameworkOutput } from './IFrameworkControllerDeleteFrameworkOutput';

export interface IFrameworkControllerDeleteFramework {
  (
    args: IFrameworkControllerDeleteFrameworkInput,
  ): Promise<IFrameworkControllerDeleteFrameworkOutput>;
}
