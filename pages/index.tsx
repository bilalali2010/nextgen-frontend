import ChatBox from "../components/ChatBox";
import UploadSection from "../components/UploadSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">NEXTGEN AI</h1>
      <UploadSection />
      <ChatBox />
    </main>
  );
}
