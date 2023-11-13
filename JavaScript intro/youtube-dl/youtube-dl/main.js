const ytdl = require("ytdl-core");
const fs = require("fs");

const link = "https://www.youtube.com/watch?v=HF0s-pXOHck";
const filePath = "./newMovie.mov";

ytdl(link, { quality: "highest" }).pipe(fs.createWriteStream(filePath));
