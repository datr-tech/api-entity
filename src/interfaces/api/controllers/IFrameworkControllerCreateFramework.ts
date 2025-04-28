import { IFrameworkControllerCreateFrameworkInput } from './IFrameworkControllerCreateFrameworkInput';
import { IFrameworkControllerCreateFrameworkOutput } from './IFrameworkControllerCreateFrameworkOutput';

export interface IFrameworkControllerCreateFramework {
  (
    args: IFrameworkControllerCreateFrameworkInput,
  ): Promise<IFrameworkControllerCreateFrameworkOutput>;
}
