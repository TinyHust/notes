const S3 = require("aws-sdk/clients/s3");
const uniqid = require("uniqid");
const mime = require("mime");
/**
 * Use AWS SDK to create pre-signed POST data.
 * We also put a file size limit (100B - 10MB).
 * @param key
 * @param contentType
 * @returns {Promise<object>}
 */
const createPresignedPost = ({ key, contentType }) => {
  const s3 = new S3();
  const params = {
    Expires: 60,
    Bucket: "presigned-post-data",
    Conditions: [["content-length-range", 100, 10000000]], // 100Byte - 10MB
    Fields: {
      "Content-Type": contentType,
      key,
    },
  };
  return new Promise(async (resolve, reject) => {
    s3.createPresignedPost(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};
/**
 * We need to respond with adequate CORS headers.
 * @type {{"Access-Control-Allow-Origin": string, "Access-Control-Allow-Credentials": boolean}}
 */
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};
module.exports.getPresignedPostData = async ({ body }) => {
  try {
    const { name } = JSON.parse(body);
    const presignedPostData = await createPresignedPost({
      key: `${uniqid()}_${name}`,
      contentType: mime.getType(name),
    });
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        error: false,
        data: presignedPostData,
        message: null,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: true,
        data: null,
        message: e.message,
      }),
    };
  }
};
