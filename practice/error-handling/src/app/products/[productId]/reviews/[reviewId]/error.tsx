// // below; from the topic no. 25. Error Handliing in Next.js, when we reloads the page (http://localhost:3000/products/1/reviews/1) after throwing an error in the server component, it will show the error message in the page. this is because we have added an error boundary in the reviewId component. this is how we can use error boundaries in nextjs to catch errors in server components and show a fallback UI. this is useful for production, we can show a user friendly error message instead of crashing the entire application.

// "use client";

// export default function ErrorBoundary({error}:{error: Error}){
//     return (
//         // <div style={{backgroundColor:"red", color:"white", padding:"1rem"}}>
//         //     <h1>Something went wrong</h1>
//         //     <p>We are sorry for the inconvenience. Please try again later.</p>
//         // </div>
//         <div>
//             {/* <h1>Something went wrong, Error in reviewId</h1> */} 
//             {/* here we replace the hardcoded text with error.message to show the error message that was thrown in the server component. this is how we can use error boundaries in nextjs to catch errors in server components and show a fallback UI. this is useful for production, we can show a user friendly error message instead of crashing the entire application. */} 
//             <p className="text-red-500">*{error.message}</p>
//         </div>
//     )
// }



// // below; from the topic no. 26. Recovering from errors in Next.js, we can use the reset function to reset the error boundary and try to render the component again. this is useful for production, we can show a user friendly error message instead of crashing the entire application.

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