const express = require("express");
const router = new express.Router();
const multer = require("multer");
const sharp = require("sharp");
const News = require("../models/news");

router.get("/api/news", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const news = await News.find({})
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 })
        .exec();
    res.send(news);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/api/news", async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.send(news)
    } catch (e) {
      res.status(400).send(e);
    }
});

const upload = multer({
    limits: {
      // fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
      if (
        !(
          file.originalname.endsWith(".jpg") ||
          file.originalname.endsWith(".jpeg") ||
          file.originalname.endsWith(".png")
        )
      ) {
        return cb(new Error("Provide an image"));
      }
      cb(undefined, true);
    },
  });
  
router.post(
    "/api/news/image/:id",
    upload.single("image"),
    async (req, res) => {
        const buffer = await sharp(req.file.buffer)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer();
        const news = await News.findById(req.params.id);
        news.image = buffer;
        news.save()
        res.send(req.user);
    },
    (error, req, res, next) => {
      res.status(400).send({ error: error.message });
    }
);

module.exports = router;