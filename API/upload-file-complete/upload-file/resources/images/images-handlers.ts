import busboy from "busboy";
import type { Request, Response } from "express";
import { Types } from "mongoose";
import sharp from "sharp";
import { getImageBucket } from "./images-model";

export const getImage = async (req: Request, res: Response) => {
  const id = new Types.ObjectId(req.params.id);
  const imageBucket = getImageBucket();

  // Hämta bildens metadata så att vi kan sätta content-type till rätt värde.
  const imageData = await imageBucket.find({ _id: id }).next();
  if (!imageData) return res.status(404).json("Image does not exists");
  res.setHeader("Content-Type", imageData.metadata?.contentType);

  // Skickar bilden som ett svar till klienten
  imageBucket.openDownloadStream(id).pipe(res);
};

export const uploadImage = (req: Request, res: Response) => {
  const bb = busboy({ headers: req.headers });

  // Så här ser våra "rör" ut i koden nedan.
  // req --> bb/incomingStream --> sharpTransformer --> uploadStreamGridFS

  req.pipe(bb);

  bb.on("file", (_, incomingStream, info) => {
    const uploadStream = getImageBucket().openUploadStream(info.filename, {
      metadata: {
        contentType: info.mimeType,
      },
    });

    uploadStream.on("finish", () => {
      res.status(201).json(uploadStream.id);
    });

    const transformer = sharp().resize({
      width: 100,
      height: 100,
      fit: "cover",
    });

    incomingStream.pipe(transformer).pipe(uploadStream);
  });
};
