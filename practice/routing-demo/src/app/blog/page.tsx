import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog",
    description: "A simple blog page",
};

export default async function Blog() {

    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("delayed"); 
        }, 2000);
    })

    return <h1>My Blogs</h1>
}


// above is the example of how to use loading.tsx in a server component. when we navigate to the blog page, it will show the loading.tsx page for 2 seconds before showing the blog page. this is because we have added a delay of 2 seconds in the blog page. this is how we can use loading.tsx in a server component.