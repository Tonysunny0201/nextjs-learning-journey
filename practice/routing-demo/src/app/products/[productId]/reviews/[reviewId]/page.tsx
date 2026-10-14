import { notFound } from "next/navigation";

export default async function ProductReviewDetail({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    if(parseInt(reviewId) > 1000){
        notFound();
    }
    return (
        <h1>Product Review Detail for Product {productId} - Review {reviewId}</h1>
    );
}
