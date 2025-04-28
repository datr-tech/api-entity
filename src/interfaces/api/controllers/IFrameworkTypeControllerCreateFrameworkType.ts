import { IFrameworkTypeControllerCreateFrameworkTypeInput } from './IFrameworkTypeControllerCreateFrameworkTypeInput';
import { IFrameworkTypeControllerCreateFrameworkTypeOutput } from './IFrameworkTypeControllerCreateFrameworkTypeOutput';

export interface IFrameworkTypeControllerCreateFrameworkType {
  (
    args: IFrameworkTypeControllerCreateFrameworkTypeInput,
  ): Promise<IFrameworkTypeControllerCreateFrameworkTypeOutput>;
}
