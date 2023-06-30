import { ModuleMetadata } from '@nestjs/common';
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import LogOptions from './logOptions.interface';

type LogAsyncOptions = Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider<LogOptions>, 'useFactory' | 'inject'>;

export default LogAsyncOptions;
