import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type StatData = {
    dailyVisits: { date: string; count: number }[];
    topIps: { ip: string; count: number }[];
};

export default function StatsPage() {
    const { secretCode } = useParams();
    const [data, setData] = useState<StatData | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5044/api/stats/${secretCode}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [secretCode]);

    if (!data) return <p className="text-center mt-10">Loading stats...</p>;

    return (
        <div className="max-w-2xl mx-auto mt-10 space-y-8">
            <h2 className="text-2xl font-bold">Statistics</h2>

            <div>
                <h3 className="text-lg font-semibold">📈 Daily Visits</h3>
                <ul className="list-disc list-inside">
                    {data.dailyVisits.map((v, i) => (
                        <li key={i}>
                            {v.date}: {v.count}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold">🌍 Top 10 IPs</h3>
                <ul className="list-disc list-inside">
                    {data.topIps.map((ip, i) => (
                        <li key={i}>
                            {ip.ip}: {ip.count}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
