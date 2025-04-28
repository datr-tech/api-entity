import { IFrameworkControllerReadFrameworkInput } from './IFrameworkControllerReadFrameworkInput';
import { IFrameworkControllerReadFrameworkOutput } from './IFrameworkControllerReadFrameworkOutput';

export interface IFrameworkControllerReadFramework {
  (
    args: IFrameworkControllerReadFrameworkInput,
  ): Promise<IFrameworkControllerReadFrameworkOutput>;
}
