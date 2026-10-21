// // below; from the topic no. 29. Handling global errors ....


"use client";

import "./globals.css";

export default function GlobalError() {
    return (
        <html>
            <body>
                <div className="flex items-center flex-col justify-center min-h-screen">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
                    <button onClick={() => {
                        // refresh the page to try again
                        window.location.reload();
                    }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Refresh
                    </button>
                </div>
            </body>
        </html>
    )
}