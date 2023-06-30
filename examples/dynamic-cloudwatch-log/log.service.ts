import { Inject, Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { Logger as WinstonLogger } from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import { LOG_CONFIG_OPTIONS } from './constants';
import LogOptions from './logOptions.interface';

@Injectable()
export default class CustomLogService {
  private logger: WinstonLogger;

  constructor(@Inject(LOG_CONFIG_OPTIONS) private options: LogOptions) {
    this.logger = winston.createLogger({
      format: winston.format.json(),
      transports: [],
    });

    const cloudwatchConfig = {
      logGroupName: options.logGroupName,
      logStreamName: options.logStreamName,
      awsAccessKeyId: options.awsAccessKeyId,
      awsSecretKey: options.awsSecretKey,
      awsRegion: options.awsRegion,
      messageFormatter: ({ level, message, additionalInfo }) =>
        `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(
          additionalInfo,
        )}}`,
    };

    this.logger.add(new WinstonCloudWatch(cloudwatchConfig));
  }

  log(msg: string) {
    this.logger.info(msg);
  }
}
