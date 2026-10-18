"use client";

import { useRouter } from "next/router";


export default function OrderProduct() {

    // useRouter is a hook that allows us to access the router object in a client component. each of the methods below is used to navigate to a different page in the application.
    const router = useRouter();
    const handleClick = () => {
        console.log("Order placed!");
        router.push("/"); // navigate to the home page after placing the order
        router.prefetch("/"); // prefetch the home page for faster navigation
        router.back(); // navigate back to the previous page
        router.forward(); // navigate forward to the next page
        router.replace("/"); // replace the current page with the home page
    }

    return (
        <>
            <h1>Order Product Page</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}