import { IFrameworkTypeControllerUpdateFrameworkTypeInput } from './IFrameworkTypeControllerUpdateFrameworkTypeInput';
import { IFrameworkTypeControllerUpdateFrameworkTypeOutput } from './IFrameworkTypeControllerUpdateFrameworkTypeOutput';

export interface IFrameworkTypeControllerUpdateFrameworkType {
  (
    args: IFrameworkTypeControllerUpdateFrameworkTypeInput,
  ): Promise<IFrameworkTypeControllerUpdateFrameworkTypeOutput>;
}
