import { IFrameworkControllerUpdateFrameworkInput } from './IFrameworkControllerUpdateFrameworkInput';
import { IFrameworkControllerUpdateFrameworkOutput } from './IFrameworkControllerUpdateFrameworkOutput';

export interface IFrameworkControllerUpdateFramework {
  (
    args: IFrameworkControllerUpdateFrameworkInput,
  ): Promise<IFrameworkControllerUpdateFrameworkOutput>;
}
