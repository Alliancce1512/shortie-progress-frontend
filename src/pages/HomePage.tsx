import { useState } from "react";

export default function HomePage() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [secretUrl, setSecretUrl] = useState("");
    const [count, setCount] = useState(1247); // mock counter

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5044/api/Shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ longUrl }),
        });

        const data = await response.json();
        setShortUrl(data.shortUrl);
        setSecretUrl(data.secretUrl);
        setCount((prev) => prev + 1);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3">
                Welcome to <span className="text-lime-500">Shortie</span>
            </h1>
            <p className="text-gray-600 text-center mb-8 max-w-xl">
                The fastest way to shorten your URLs and track their performance. Clean,
                simple, and powerful.
            </p>

            <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-6">
                <div className="text-center mb-4">
                    <h2 className="font-bold text-lg">🔗 Shortie</h2>
                    <p className="text-sm text-gray-500">
                        Transform your long URLs into short, shareable links
                    </p>
                </div>

                {!shortUrl ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="url"
                            placeholder="Paste your long URL here..."
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                            required
                            className="w-full px-4 py-2 text-sm border rounded-lg mb-4 bg-zinc-100 dark:bg-zinc-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-lime-400 hover:bg-lime-500 transition font-semibold text-white py-2.5 text-sm rounded-xl"
                        >
                            Shorten URL
                        </button>
                    </form>
                ) : (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
                            <span className="truncate">{shortUrl}</span>
                            <button
                                onClick={() => copyToClipboard(shortUrl)}
                                className="text-sm text-lime-500 font-semibold hover:underline"
                            >
                                Copy
                            </button>
                        </div>

                        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
                            <span className="truncate">{secretUrl}</span>
                            <button
                                onClick={() => copyToClipboard(secretUrl)}
                                className="text-sm text-lime-500 font-semibold hover:underline"
                            >
                                Copy
                            </button>
                        </div>

                        <button
                            onClick={() => {
                                setShortUrl("");
                                setSecretUrl("");
                                setLongUrl("");
                            }}
                            className="w-full border text-sm py-2.5 rounded-xl hover:bg-gray-50"
                        >
                            Shorten Another URL
                        </button>
                    </div>
                )}
            </div>

            <p className="mt-4 text-sm text-gray-500">
                <span className="text-lime-500 font-bold">{count}</span> links shortened and counting!
            </p>

            <p className="text-xs text-gray-400 text-center mt-2 max-w-sm">
                Shortie provides fast URL shortening with detailed analytics.
                Perfect for social media, marketing campaigns, and link management.
            </p>
        </div>
    );
}
