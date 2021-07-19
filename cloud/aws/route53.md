# Working With AWS Route 53 in Node.js
REFs: 
[https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#changeResourceRecordSets-property](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#changeResourceRecordSets-property)  
[https://thecodebarbarian.com/working-aws-route-53-in-node-js.html](https://thecodebarbarian.com/working-aws-route-53-in-node-js.html)  
[https://dzone.com/articles/how-to-create-sub-domain-dynamically-using-aws-rou](https://dzone.com/articles/how-to-create-sub-domain-dynamically-using-aws-rou)  


```
const AWS = require('aws-sdk');

const accessKeyId = 'aws key here';
const secretAccessKey = 'aws secret here';

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region: 'us-east-1'
});

const route53 = new AWS.Route53();

run().catch(err => console.log(err));

async function run() {
  // AWS SDK methods don't return promises, but AWS requests have a
  // `promise()` function. See:
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Request.html#promise-property
  const res = await route53.listHostedZones().promise();
  console.log(res);
}
```