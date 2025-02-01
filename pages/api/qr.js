// pages/api/qr.js
import qr from 'qr-image';

export default async function handler(req, res) {
  const { url } = req.query; // Get the URL from the query parameters

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const qrSvg = qr.imageSync(url, { type: 'svg' });
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(qrSvg);
}
