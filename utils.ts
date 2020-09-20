import del from "del";

export const imageFilter = function (req: any, file: any, cb: any) {
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

export const getFormattedDate = () => {
  const date = new Date(Date.now());
  const rule = /[^A-Za-z0-9]/g;
  const _2 = date
    .toLocaleString("en-CA", {
      timeZoneName: "short",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(rule, "_");
  return _2;
};

export const cleanFolder = function (folderPath: string) {
  // delete files inside folder but not the folder itself
  del.sync([`${folderPath}/**`, `!${folderPath}`]);
};
