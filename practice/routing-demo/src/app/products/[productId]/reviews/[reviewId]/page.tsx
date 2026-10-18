import { notFound, redirect } from "next/navigation";

export default async function ProductReviewDetail({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect("/products"); // redirect to the products page if the reviewId is greater than 1000, it hows how we can use redirect in a server component to redirect to another page. we can also use notFound() to show a 404 page.
    }
    return (
        <h1>Product Review Detail for Product {productId} - Review {reviewId}</h1>
    );
}
