import Link from "next/link";
import { useTrackEvent } from "@/lib/hooks/useTrackEvent";

export default function Home() {
  const { trackEvent } = useTrackEvent();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => trackEvent("home_btn_one")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Button 1
        </button>
        <Link
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            onClick={() => trackEvent("home_external_link")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            External Link
          </button>
        </Link>
      </div>
    </div>
  );
}
