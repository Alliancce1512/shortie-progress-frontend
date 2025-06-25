import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import Header from "./components/Header";

function App() {
    return (
        <div className="font-sans bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 min-h-screen">
            <Header />

            <main className="pt-6">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/stats/:secretCode" element={<StatsPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;