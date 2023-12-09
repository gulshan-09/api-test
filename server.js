const express = require('express');
// const fetch = require('node-fetch');
const app = express();
const port = 5002;

app.use(express.json());

app.get('/getAnimeData', async (req, res) => {
  try {
    const response = await fetch('https://gojox.cloud/assets/anime.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
