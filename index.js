const express = require('express');
const app = express();
const port = 3000;
// Root route (optional)
app.get('/', (req, res) => {
  res.send('Hex-to-RGB API is running!');
});
// Helper: hex-to-rgb conversion
function hexToRgb(hex) {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid HEX format');
  }
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
}

// API Route
app.get('/hex-to-rgb/:hex', (req, res) => {
  try {
    const { hex } = req.params;
    const rgb = hexToRgb(hex);
    res.json(rgb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

if (require.main === module) {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}

module.exports = { app, hexToRgb };
