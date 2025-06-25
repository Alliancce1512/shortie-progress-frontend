import { useState } from "react";

export const HomePage = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [secretUrl, setSecretUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5044/api/Shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ longUrl }),
        });

        const data = await response.json();
        setShortUrl(data.shortUrl);
        setSecretUrl(data.secretUrl);
    };

    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Shorten your URL</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="url"
                    placeholder="Enter your long URL..."
                    className="w-full px-4 py-2 border rounded"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Shorten
                </button>
            </form>

            {shortUrl && (
                <div className="mt-6 space-y-2">
                    <p>
                        <strong>Short URL:</strong>{" "}
                        <a href={shortUrl} className="text-blue-400 underline" target="_blank">
                            {shortUrl}
                        </a>
                    </p>
                    <p>
                        <strong>Stats URL:</strong>{" "}
                        <a href={secretUrl} className="text-blue-400 underline" target="_blank">
                            {secretUrl}
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};
