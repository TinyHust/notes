const AWS = require("aws-sdk");

const lambda = new AWS.Lambda();

const invokeLambda = async () => {
  let sampleData = { number1: 1, number2: 2 };

  let params = {
    FunctionName: "child-sqs-consumer-dev-extract",
    Payload: JSON.stringify(sampleData),
  };

  try {
    await lambda.invoke(params).promise();
    return true;
  } catch (e) {
    console.log("invokeLambda :: Error: " + e);
  }
};

exports.handler = async function(event, context) {
  event.Records.forEach((record) => {
    const { body } = record;
    console.log(body);
  });

  await invokeLambda();

  return {};
};
