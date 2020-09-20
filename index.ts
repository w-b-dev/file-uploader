import multer from "multer";
import express from "express";
import cors from "cors";
import { imageFilter } from "./utils";

const UPLOAD_PATH = "uploads";
const storage = multer.diskStorage({
  destination: `${UPLOAD_PATH}/`,
  filename: (req, file, cb) => {
    cb(null, file.originalname.replace(/\s/g, ""));
  },
});
const upload = multer({ storage, fileFilter: imageFilter });

const app = express();
app.use(cors());
app.listen(3000, () => console.log("Listening 3000"));

// route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // console.log(req.file);
    res.send({
      id: Date.now(),
      filename: req.file.originalname.replace(/\s/g, ""),
    });
  } catch (error) {
    res.sendStatus(400);
  }
});
