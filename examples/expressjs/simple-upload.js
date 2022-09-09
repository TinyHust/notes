// Simple upload
const express = require("express");
const multer = require("multer");
const cors = require("cors");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    const extention = file.mimetype.split("/")[1];
    var imageUrl = file.fieldname + "-" + Date.now() + "." + extention;
    callback(null, imageUrl);
  },
});

const upload = multer({ storage });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.files);
  console.log("req.body: ", req.body);
  res.status(200).send({
    status: "success",
  });
});

const port = 5001;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});