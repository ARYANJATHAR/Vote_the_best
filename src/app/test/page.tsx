export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Tailwind Test Page</h1>
        <p className="mb-4">
          This is a simple test page to check if Tailwind CSS is working properly.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Green Button
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Red Button
          </button>
        </div>
      </div>
    </div>
  );
} 