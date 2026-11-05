import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="teachers" element={<TeachersPage />} />

        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
