import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BookmarkPage from "./pages/BookmarkPage";
import DetailPage from "./pages/DetailPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
