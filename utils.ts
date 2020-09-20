import { Multer } from "multer";

export const imageFilter = function (req: any, file: any, cb: any) {
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
