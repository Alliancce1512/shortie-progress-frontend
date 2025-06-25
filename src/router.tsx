import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import StatsPage from "./pages/StatsPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/stats/:secretCode" element={<StatsPage />} />
            </Routes>
        </BrowserRouter>
    );
}