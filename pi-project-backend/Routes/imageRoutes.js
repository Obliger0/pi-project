const express = require("express");
const imageRouter = express.Router();
const cloudinary = require("cloudinary");
const Image = require("../modals/imageModal");

imageRouter.post("/upload-image", async (req, res)=>{
  try {
    const { _id: userId } = req.user;
    const { image, name, size } = req.body;
    const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
      image,
      {
        folder: process.env.CLOUD_FOLDER,
      }
    );
    const imageData = await Image.create({
      name,
      size,
      publicId: public_id,
      secureUrl: secure_url,
      userId,
    });
    res.status(200).json({ imageData });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = {
  imageRouter,
};
