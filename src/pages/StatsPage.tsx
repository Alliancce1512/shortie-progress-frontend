import { useParams } from "react-router-dom";

export default function StatsPage() {
    const { secretCode } = useParams();

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold">Stats for: {secretCode}</h1>
        </div>
    );
}