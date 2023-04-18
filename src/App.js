import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage.jsx"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
