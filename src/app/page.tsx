'use client'
import Image from "next/image";

export default function Home() {
  const call = async () => {
    const response = await fetch("/api/test", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(response);
    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button type="button"
      onClick={call}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Redirect
      </button>

    </main>
  );
}
