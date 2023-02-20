exports.handler = async function(event, context) {
  console.log("child-sqs-consumer");
  console.log({ number1: event.number1 });
  return {
    msg: "child-sqs-consumer",
  };
};
