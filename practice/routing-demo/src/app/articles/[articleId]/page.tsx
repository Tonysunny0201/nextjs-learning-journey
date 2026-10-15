// //  to access the value of params and searchParams, we need to use await because they are promises.
// // below is the example of how to access the value of params and searchParams in a server component.

// import Link from "next/link";

// export default async function NewsArticle({ params, searchParams, }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: "en" | "es" | "fr" }> }) {
//     const { articleId } = await params;
//     const {lang="en"} = await searchParams;
//     return (
//         <>
//         <div>
//             <h1>News Article {articleId}</h1>
//             <p>Language in: {lang}</p>

//             <div>
//                 <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//                 <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//                 <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//             </div>
//         </div>
//         </>
//     );
// }


   

//  to access the value of params and searchParams, in a client component, we need to use "use" hook from react. 
// below is the example of how to access the value of params and searchParams in a client component.

"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({ params, searchParams, }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: "en" | "es" | "fr" }> }) {
    const { articleId } = use(params);
    const {lang="en"} = use(searchParams);
    return (
        <>
        <div>
            <h1>News Article {articleId}</h1>
            <p>Language in: {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
        </>
    );
}