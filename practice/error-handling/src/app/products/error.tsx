
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";



export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void; }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset(); // this is how we can reset the error boundary and try to render the component again. this is useful for production, we can show a user friendly error message instead of crashing the entire application.
        });
    };
    return (
        <div>
            <p className="text-red-500">*{error.message}</p>
            <button onClick={reload} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                Try again
            </button>
        </div>
    )
}