const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const uploadRoute = require('./routes/upload');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', uploadRoute); // Mount upload route
// File storage config
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Upload endpoint
app.post('/upload', upload.single('resume'), (req, res) => {
  console.log('File uploaded:', req.file);
  res.json({ message: 'Upload successful', file: req.file.filename });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
