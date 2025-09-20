import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-8xl font-bold text-[#578FCA]     mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#578FCA] text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
