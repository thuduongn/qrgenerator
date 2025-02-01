// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const handleSubmit = async () => {
    if (!url) return;

    const res = await fetch(`/api/qr?url=${encodeURIComponent(url)}`);
    const qrSvg = await res.text();
    setQrCode(qrSvg);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">QR Code Generator</h1>
      <div className="text-center">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="p-2 border border-gray-300"
        />
        <button
          onClick={handleSubmit}
          className="ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Generate QR Code
        </button>
        {qrCode && (
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: qrCode }}
          />
        )}
      </div>
    </div>
  );
}
