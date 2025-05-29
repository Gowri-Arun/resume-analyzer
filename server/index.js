// server/index.js
const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Attach routes
app.use('/api', uploadRoute);
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend is running and reachable' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

