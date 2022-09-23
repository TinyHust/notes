# subcription sns

serverless.yml

```yaml
service: sns-serverless

provider:
  name: aws
  stage: ${opt:stage, 'dev'}
  runtime: nodejs14.x
  region: us-east-2

functions:
  aggregator:
    handler: handler.handler
    timeout: 30
    memorySize: 2048
    events:
      - sns: arn:aws:sns:us-east-2:951014477372:lamba_topic
```

handler.js

```javascript
console.log("Loading function");

exports.handler = async (event, context) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  const message = event.Records[0].Sns.Message;
  console.log("From SNS:", message);
  return message;
};
```
