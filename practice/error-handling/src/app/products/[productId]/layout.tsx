// // below; from the topic no. 28. Handling errors in layouts 

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}


export default function ProductDetailsLayout({
    children,
}:{
    children: React.ReactNode;
}) {

    // // here i am commenting out the error throwing code in the layout component because it will break and confusing... 
    // const random = getRandomInt(2);
    // if (random === 1) {
    //     throw new Error("Error loading product"); 
    // }

    return(
        <>
            {children}
            <h2>Featured Products</h2>
        </>
    )
}