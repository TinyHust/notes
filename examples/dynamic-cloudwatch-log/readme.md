users.module.ts

```typescript
@Module({
  imports: [
    CustomLogModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        logGroupName: configService.get("logGroupName"),
        logStreamName: configService.get("logStreamName"),
        awsAccessKeyId: configService.get("awsAccessKeyId"),
        awsSecretKey: configService.get("awsSecretKey"),
        awsRegion: configService.get("awsRegion"),
      }),
    }),
  ],
  providers: [CustomLogService],
  exports: [],
  controllers: [],
})
export class UsersModule {}
```

users.controller.ts

```typescript
export class UsersController {
  constructor(private readonly customLogService: CustomLogService) {}

  @Get("test")
  testLog() {
    this.customLogService.log("test users 4");
  }
}
```

```typescript
@Module({
  imports: [
    CustomLogModule.register({
      logGroupName: "",
      logStreamName: "",
      awsAccessKeyId: "",
      awsSecretKey: "",
      awsRegion: "us-east-1",
    }),
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class TemplatesModule {}
```
