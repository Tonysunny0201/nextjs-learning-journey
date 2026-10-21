"use client";

export default function ErrorBoundary({error}:{error: Error}){
    return (
        // <div style={{backgroundColor:"red", color:"white", padding:"1rem"}}>
        //     <h1>Something went wrong</h1>
        //     <p>We are sorry for the inconvenience. Please try again later.</p>
        // </div>
        <div>
            {/* <h1>Something went wrong, Error in reviewId</h1> */} // here we replace the hardcoded text with error.message to show the error message that was thrown in the server component. this is how we can use error boundaries in nextjs 13 to catch errors in server components and show a fallback UI. this is useful for production, we can show a user friendly error message instead of crashing the entire application.
            <p>{error.message}</p>
        </div>
    )
}