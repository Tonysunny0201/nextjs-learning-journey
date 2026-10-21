import Link from "next/link";

export default function ProductList(){
    const productId=100
    return(
        <>
        <Link href="/">Back to Home</Link>
        <h1>Product List</h1>
        {/* below is the example of static product links */}
        <h2>
            <Link href="/products/1">Product 1</Link>
        </h2>
        <h2>
            <Link href="/products/2">Product 2</Link>
        </h2>
        {/* below is the example of static product links, but with replace. because here replace key overrides the current history entry instead of adding a new one */}
        <h2>
            <Link href="/products/3" replace>Product 3</Link>
        </h2>
        {/* below is the example of dynamic product links */}
        <h2>
            <Link href={`/products/${productId}`}>Product {productId}</Link>
        </h2>
        </>
    )
}
