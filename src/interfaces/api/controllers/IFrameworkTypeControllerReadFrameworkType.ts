import { IFrameworkTypeControllerReadFrameworkTypeInput } from './IFrameworkTypeControllerReadFrameworkTypeInput';
import { IFrameworkTypeControllerReadFrameworkTypeOutput } from './IFrameworkTypeControllerReadFrameworkTypeOutput';

export interface IFrameworkTypeControllerReadFrameworkType {
  (
    args: IFrameworkTypeControllerReadFrameworkTypeInput,
  ): Promise<IFrameworkTypeControllerReadFrameworkTypeOutput>;
}
