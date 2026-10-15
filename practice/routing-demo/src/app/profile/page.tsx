import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "Profile",
    },
};


export default function Profile() {
    return <h1>User Profile</h1>
}
