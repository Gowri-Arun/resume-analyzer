// server/routes/upload.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Configure multer to store files in the 'uploads/' directory
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Optional: Log file details
  console.log('Uploaded file:', req.file);

  // Respond with file info or start further processing here
  res.json({
    message: 'Upload successful',
    filename: req.file.filename,
    originalname: req.file.originalname,
  });
});

module.exports = router;
