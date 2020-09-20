import multer from "multer";
import express from "express";
import cors from "cors";
import { imageFilter, getFormattedDate, cleanFolder } from "./utils";

const UPLOAD_PATH = "uploads";
cleanFolder(UPLOAD_PATH);

const storage = multer.diskStorage({
  destination: `${UPLOAD_PATH}/`,
  filename: (req, file, cb) => {
    cb(null, getFormattedDate() + "_" + file.originalname.replace(/\s/g, ""));
  },
});
const upload = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 100000 }, //100KB-ish
});

const app = express();
app.use(cors());
app.listen(3000, () => console.log("Listening 3000"));

// route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const formattedDate = getFormattedDate();
    console.log(formattedDate, req.file);
    res.send({
      id: formattedDate,
      filename: req.file.originalname.replace(/\s/g, ""),
    });
  } catch (error) {
    res.sendStatus(400);
  }
});
