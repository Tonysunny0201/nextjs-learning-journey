import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog",
    description: "A simple blog page",
};

export default function Blog() {
    return <h1>My Blogs</h1>
}
