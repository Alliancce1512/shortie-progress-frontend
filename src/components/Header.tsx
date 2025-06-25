import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
    const [dark, setDark] = useState(() => localStorage.theme === "dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.theme = dark ? "dark" : "light";
    }, [dark]);

    return (
        <header className="w-full flex justify-between items-center px-6 py-4 border-b">
            <span className="text-lg font-bold text-primary">Shortie</span>
            <button
                onClick={() => setDark(!dark)}
                className="text-gray-600 dark:text-gray-200"
            >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </header>
    );
}