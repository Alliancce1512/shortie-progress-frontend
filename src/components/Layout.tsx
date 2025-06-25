import { useState, useEffect } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [dark, setDark] = useState(() =>
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors">
        <div className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-xl font-bold">Shortie</h1>
            <button
    className="border px-3 py-1 rounded"
    onClick={() => setDark(!dark)}
>
    {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
    </div>
    <main className="p-4">{children}</main>
        </div>
);
};