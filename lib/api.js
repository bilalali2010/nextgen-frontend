const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function sendMessage(message) {
  const res = await fetch(`${BACKEND}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  if (!res.ok) throw new Error("Backend error");

  return res.json();
}

export async function uploadDocument(text) {
  const res = await fetch(`${BACKEND}/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ documentText: text })
  });

  if (!res.ok) throw new Error("Upload failed");

  return res.json();
}
