const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'page.html'));
});

app.get('/api', (req, res) => {
  res.json({ message: "Greetings from Greg's server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
