## nodejs example

```bash
npm i @google-cloud/dialogflow-cx connect-busboy cors dotenv express uuid
```

```javascript
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { SessionsClient } = require("@google-cloud/dialogflow-cx");
const { v4: uuid } = require("uuid");
const Path = require("path");
const { pipeline, Transform } = require("stream");
const busboy = require("connect-busboy");
const util = require("util");
const fs = require("fs");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const projectId = "strapi-login-346512";
const location = "us-central1";
const agentId = "e4fb1664-3d82-4c7a-9de9-9d95db1ed4bb";
const languageCode = "en";
const encoding = "AUDIO_ENCODING_UNSPECIFIED"; //ref: https://googleapis.dev/java/google-cloud-dialogflow/latest/com/google/cloud/dialogflow/v2/AudioEncoding.html
const sampleRateHertz = 48000;
const sessionId = uuid();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(
  busboy({
    immediate: true,
  })
);

const sessionClient = new SessionsClient({
  projectId,
  apiEndpoint: "us-central1-dialogflow.googleapis.com",
  //keyFilename: Path.join(__dirname, "./serviceaccounts-key.json"),
  credentials: {
    private_key: "",
    client_email: "username@strapi-login-346512.iam.gserviceaccount.com",
  },
});

const sessionPath = sessionClient.projectLocationAgentSessionPath(projectId, location, agentId, sessionId);

app.post("/text-input", async (req, res) => {
  const { message } = req.body;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
      },
      languageCode,
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    res.status(200).send({ data: responses });
  } catch (e) {
    console.log(e);
    res.status(422).send({ e });
  }
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/voice-input", (req, res) => {
  const pump = util.promisify(pipeline);

  const audioRequest = {
    session: sessionPath,
    queryInput: {
      audio: {
        config: {
          audioEncoding: encoding,
          sampleRateHertz: sampleRateHertz,
          synthesize_speech_config: {
            voice: {
              // Set's the name and gender of the ssml voice
              name: "en-GB-Standard-A",
              ssml_gender: "SSML_VOICE_GENDER_FEMALE",
            },
          },
          singleUtterance: true,
        },
      },
      languageCode,
    },
  };

  let streamData = null;
  const detectStream = sessionClient
    .streamingDetectIntent()
    .on("error", (error) => console.log(error))
    .on("data", (data) => {
      if (data.recognitionResult) {
        console.log(`Intermediate Transcript: ${data.recognitionResult.transcript}`);
        streamData = data.recognitionResult.transcript;
      } else {
        console.log("Detected Intent:");
        const result = data.detectIntentResponse.queryResult;

        console.log(`User Query: ${result.transcript}`);
        streamData = result.transcript;
        for (const message of result.responseMessages) {
          if (message.text) {
            console.log(`Agent Response: ${message.text.text}`);
          }
        }
        if (result.match.intent) {
          console.log(`Matched Intent: ${result.match.intent.displayName}`);
        }
        console.log(`Current Page: ${result.currentPage.displayName}`);
      }
    })
    .on("end", (data) => {
      res.status(200).send({ data: streamData });
    });

  detectStream.write(audioRequest);

  try {
    req.busboy.on("file", (_, file, filename) => {
      pump(
        file,
        new Transform({
          objectMode: true,
          transform: (obj, _, next) => {
            next(null, { queryInput: { audio: { audio: obj } } });
          },
        }),
        detectStream
      );
    });

    /*     const audioFileName = Path.join(__dirname, "./hi.amr");
    pump(
      fs.createReadStream(audioFileName),
      // Format the audio stream into the request format.
      new Transform({
        objectMode: true,
        transform: (obj, _, next) => {
          next(null, { queryInput: { audio: { audio: obj } } });
        },
      }),
      detectStream
    ); */
  } catch (e) {
    console.log(`error  : ${e}`);
  }
});

app.listen(PORT, () => console.log(`🔥  server running on port ${PORT}`));
```
