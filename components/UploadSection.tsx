import { useState } from "react";
import axios from "axios";

export default function UploadSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!files.length) return;
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    setLoading(true);
    try {
      await axios.post(
        "https://nextgen-backend.bilalali092010.workers.dev/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Files uploaded!");
      setFiles([]);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-6">
      <h2 className="text-xl font-bold mb-2">Upload PDFs</h2>
      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={(e) => setFiles(Array.from(e.target.files || []))}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
