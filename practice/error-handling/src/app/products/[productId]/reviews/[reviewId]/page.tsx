// from the topic no. 25. Error Handling in Next.js, we can use the notFound() and redirect() functions from next/navigation to handle errors in our server components. we can also throw an error in a server component to show the error page. so this isn't great for production,the error message isn't useful and worse an error in our deeply nested review Id component breaks the entire application.

import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}


export default async function ProductReviewDetail({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review"); // this is how we can throw an error in a server component to show the error page. so this isn't great for production,the error message isn't useful and worse an error in our deeply nested review Id component breaks the entire application. 
    }

    const { productId, reviewId } = await params;
    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect("/products"); // redirect to the products page if the reviewId is greater than 1000, it hows how we can use redirect in a server component to redirect to another page. we can also use notFound() to show a 404 page.
    }
    return (
        <h1>Product Review Detail for Product {productId} - Review {reviewId}</h1>
    );
}
