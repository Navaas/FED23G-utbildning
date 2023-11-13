const ytdl = require("ytdl-core");
const fs = require("fs");

const link = "https://www.youtube.com/watch?v=J4-7Kvhbthg";
const filePath = "./movie.mov";

ytdl(link, { quality: "highest" }).pipe(fs.createWriteStream(filePath));
