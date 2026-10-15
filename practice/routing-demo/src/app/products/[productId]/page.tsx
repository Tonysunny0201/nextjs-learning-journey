import { Metadata } from "next";

type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({ params }: Props) : Promise<Metadata> => {
    const { productId } = await params;
    return {
        title: `Product ${productId}`,
        description: `Details for product ${productId}`
    };
};

export default async function ProductDetail({ 
    params 
}:{
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId;
    return <h1>Product Detail for Product {productId}</h1>;
}
