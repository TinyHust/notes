const AWS = require("aws-sdk");
const sqs = new AWS.SQS({
  accessKeyId: "AKIAQ4V7W...",
  secretAccessKey: "0DNFDAhMJb/ETPzgWj2I7...",
  region: "us-east-1",
});
//parameter to send message
const paramsSendMessage = {
  MessageBody: JSON.stringify({
    type: "event-live-status",
  }),
  QueueUrl: "https://sqs.us-east-1.amazonaws.com/xxxx/test-sqs",
};

//param to receive message
const paramsReceiveMessage = {
  QueueUrl: "https://sqs.us-east-1.amazonaws.com/xxxx/test-sqs",
};

sqs.sendMessage(paramsSendMessage, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Successfully added message", data.MessageId);
  }
});
