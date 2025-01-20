const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the HTML file
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'page.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
