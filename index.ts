import multer from "multer";
import express from "express";
import cors from "cors";

const DB_NAME = "db.json";
const COLLECTION_PATH = "images";
const UPLOAD_PATH = "uploads";
const upload = multer({ dest: `${UPLOAD_PATH}/` });
// const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}}`, { persistenceMethod: "fs" });

const app = express();
app.use(cors());
app.listen(3000, () => console.log("Listening 3000"));
