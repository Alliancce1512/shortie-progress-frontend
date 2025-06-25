import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage.tsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* тук после ще добавим и /stats/:secretCode */}
            </Routes>
        </Layout>
    );
}

export default App;