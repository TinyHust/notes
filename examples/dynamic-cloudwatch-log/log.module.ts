import { DynamicModule, Module } from '@nestjs/common';
import { LOG_CONFIG_OPTIONS } from './constants';
import CustomLogService from './log.service';
import LogOptions from './logOptions.interface';
import LogAsyncOptions from './logOptions.type';

@Module({})
export class CustomLogModule {
  static register(options: LogOptions): DynamicModule {
    return {
      module: CustomLogModule,
      providers: [
        {
          provide: LOG_CONFIG_OPTIONS,
          useValue: options,
        },
        CustomLogService,
      ],
      exports: [CustomLogService, LOG_CONFIG_OPTIONS],
    };
  }

  static registerAsync(options: LogAsyncOptions): DynamicModule {
    return {
      module: CustomLogModule,
      imports: options.imports,
      providers: [
        {
          provide: LOG_CONFIG_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject,
        },
        CustomLogService,
      ],
      exports: [CustomLogService, LOG_CONFIG_OPTIONS],
    };
  }
}
