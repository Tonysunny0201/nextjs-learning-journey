"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLinks = [
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Forgot Password", path: "/forgot-password" },
]

export default function AuthLayout({ children, }: { children?: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <>
            <div>
                <nav>
                    <ul>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path || (pathname.startsWith(link.path) && link.path !== "/");
                            return (
                                <li key={link.path}>
                                    <Link className={isActive ? "text-blue-500" : "text-gray-500"} href={link.path}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {children}
            </div>
        </>
    )
}