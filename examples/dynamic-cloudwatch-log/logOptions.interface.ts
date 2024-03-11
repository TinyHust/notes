interface LogOptions {
  logGroupName: string;
  logStreamName: string;
  awsAccessKeyId: string;
  awsSecretKey: string;
  awsRegion: string;
}

export default LogOptions;
